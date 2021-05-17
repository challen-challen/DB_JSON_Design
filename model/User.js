const userSchema = new mongoose.Schema(
  {
    // 닉네임
    nickname: {
      type: String,
      unique: 1,
      required: true,
    },
    // passport google id
    googleId: Number,
    // passport naver id
    naverId: Number,
    // passport githubId id
    githubId: Number,
    // passport kakaoId id
    kakaoId: Number,

    // 유저가 올린 글
    post: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Post",
      },
    ],

    // 랭킹을 위한 점수
    // 📌 mongodb expire time(조사)
    dailyScore: {
      type: Number,
      default: 0,
    },

    dailyScore: {
      type: Number,
      default: 0,
    },

    sumScore: {
      type: Number,
      default: 0,
    },
  },

  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
