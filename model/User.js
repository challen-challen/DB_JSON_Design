import mongoose from "mongoose";
import { postSchema } from "../model/Post";

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

    // 유저가 올린 최신 글
    latestPost: [postSchema],

    // 유저가 좋아요 누른 글
    likePost: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Like",
      },
    ],

    // 뱃지 이미지
    badgeUrl: {
      type: Array,
    },

    // 전체 랭킹을 위한 점수
    // 📌 mongodb expire time(조사)
    allScore: {
      dailyScore: {
        type: Number,
        default: 0,
      },

      monthlyScore: {
        type: Number,
        default: 0,
      },

      sumScore: {
        type: Number,
        default: 0,
      },
    },

    // 카테고리별 랭킹을 위한 점수
    categoryScore: {
      electricity: {
        dailyScore: {
          type: Number,
          default: 0,
        },

        monthlyScore: {
          type: Number,
          default: 0,
        },

        sumScore: {
          type: Number,
          default: 0,
        },
      },
      traffic: {
        dailyScore: {
          type: Number,
          default: 0,
        },

        monthlyScore: {
          type: Number,
          default: 0,
        },

        sumScore: {
          type: Number,
          default: 0,
        },
      },
      airCondition: {
        dailyScore: {
          type: Number,
          default: 0,
        },

        monthlyScore: {
          type: Number,
          default: 0,
        },

        sumScore: {
          type: Number,
          default: 0,
        },
      },
      resource: {
        dailyScore: {
          type: Number,
          default: 0,
        },

        monthlyScore: {
          type: Number,
          default: 0,
        },

        sumScore: {
          type: Number,
          default: 0,
        },
      },
    },
  },

  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
