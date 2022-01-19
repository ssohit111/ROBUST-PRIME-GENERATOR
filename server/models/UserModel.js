const mongoose = require('mongoose');
const UserSchema = mongoose.Schema(
    {
        Low: {
            type: Number,
            required: true
        },
        High: {
            type: Number,
            required: true
        },
        timeTaken: {
            type: mongoose.Types.Decimal128,
            required: true
        },
        Choice: {
            type: String,
            required: true
        },
        Size: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
)
const User = mongoose.model("User", UserSchema);
module.exports = User;