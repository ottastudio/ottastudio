import { Type, createSchema } from "ts-mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SALT_I = 10;

const userSchema = createSchema(
  {
    name: Type.string({ required: true, maxlength: 100 }),
    email: Type.string({ required: true, unique: true, trim: 1 }),
    password: Type.string({ required: true, minlength: 6 }),
    role: Type.number({ default: 0 }),
    token: Type.string({ defalul: "" })
  },
  { timestamps: { createdAt: true } }
);

userSchema.pre("save", function(next) {
  var user: any = this;
  if (user.isModified("password")) {
    bcrypt.genSalt(SALT_I, function(err, salt) {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

userSchema.methods.comparePassword = function(
  candidatePassword: string,
  cb: Function
) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

userSchema.methods.generateToken = function(cb: Function) {
  var user: any = this;
  var token = jwt.sign(
    user._id.toHexString(),
    process.env.SESSION_SECRET as string
  );
  user.token = token;
  user.save(function(err: any, user: any) {
    if (err) return cb(err);
    cb(null, user);
  });
};

userSchema.statics.findByToken = function(token: any, cb: any) {
  var user: any = this;
  jwt.verify(token, process.env.SESSION_SECRET as string, function(
    _err: any,
    decode: any
  ) {
    user.findOne({ _id: decode, token: token }, function(err: any, user: any) {
      if (err) return cb(err);
      cb(null, user);
    });
  });
};

export default userSchema;
