const mongoose = require('mongoose');

const toDoSchema = mongoose.Schema(
    {
        task: {
            type: String,
            required: [true, 'Required field']
        },

        createdAt: {
            type: Date,
            default: Date.now
        },

        status: {
            type: String,
            enum: ['not done', 'in progress', 'blocked', 'done'],
            default: 'not done'
        }
    },
    {
        timestamps: true,
        virtuals: true,
        toJSON: {
            virtuals: true,
            transform: (_, ret) => {
                ret.id = ret._id
                delete ret._id
                delete ret._v
            }
        }
    }
)

const ToDo = mongoose.model('ToDo', toDoSchema);

module.exports = ToDo;
