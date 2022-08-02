import mongoose from '../db/mongodb'
import * as bcrypt from 'bcrypt'
// 建立用户表
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        set(val){
            return bcrypt.hashSync(val, 10)
        },
        get(val){
            return bcrypt.hashSync(val, 10)
        },
        select: false
    },
})

const User = mongoose.model('User', UserSchema)
export default User