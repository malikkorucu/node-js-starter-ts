import { model, Schema } from 'mongoose';
import IUser from '../interfaces/IUser';

const schema = new Schema<IUser>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        index: true,
        unique: true,
        match: [
            /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
            'Lütfen geçerli bir email adresi giriniz !',
        ],
    },
    avatar: {
        type: String,
        default: 'default.jpg',
    },
});

export const UserModel = model<IUser>('User', schema);
