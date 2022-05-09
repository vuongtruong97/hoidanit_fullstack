import bcrypt from 'bcryptjs';
import db from '../models/index.js';

class CRUDservice {
    async createNewUser(info) {
        console.log(info);
        try {
            const alrealdyExists = await db.User.findOne({
                where: { email: info.email },
            });
            if (alrealdyExists) {
                return false;
            }

            // Tạo User
            if (!notExist) {
                const saltRound = 10; // mặc định là 10;
                const salt = await genSalt(saltRound); // tạo salt

                //hash mật khẩu cùng salt vào hashedPassword
                const hashedPassword = await bcrypt.hash(password, salt);

                const userInfo = { ...info, password: hashedPassword }; // cập nhật mật khẩu
                await db.User.create(userInfo); // lưu vào db
                return userInfo;
            }

            // AUTH
            // lấy salt từ trong hashedPassword rồi hash cùng password từ req
            // sau đó so sánh với pw trong db
            bcrypt.compare(hashedPassword, req.password);
        } catch (e) {
            console.log(e);
        }
    }
    async getAllUser() {
        return await db.User.findAll({ raw: true });
    }
    async getUserInfoById(id) {
        const user = await db.User.findOne({ where: { id }, raw: true });
        return user ? user : false;
    }
    async updateUserInfoById(id, newInfo) {
        const user = await db.User.findOne({ where: { id }, raw: true });
        user &&
            (await db.User.update({ ...user, ...newInfo }, { where: { id } }));

        return user ? user : false;
    }
    async deleteUserById(id) {
        const result = await db.User.destroy({ where: { id } });
        return result;
    }
}
export default new CRUDservice();
