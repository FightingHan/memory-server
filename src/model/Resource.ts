import mongoose from '../db/mongodb'
import * as bcrypt from 'bcrypt'
// 建立资源表
const ResourceSchema = new mongoose.Schema({
    userId: {
        type: String,
        unique: true
    },
    content: {
        type: String,
        set(val){
            return bcrypt.hashSync(val, 10)
        },
        select: false
    },
    createTime: {
        type: Date,
        default: Date.now
    },
    updateTime: {
        type: Date,
        default: Date.now
    }
})

const Resource = mongoose.model('Resource', ResourceSchema)
export default Resource