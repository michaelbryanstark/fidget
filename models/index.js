const userSchema = new mongoose.Schema(
    {
        name: String,
        birthday: Date,
        posts: String,
        googleId: String,
    },
    {
        timestamps: true,
      }
);