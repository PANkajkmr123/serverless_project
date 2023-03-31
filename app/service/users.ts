import { Model } from 'mongoose';
import { CreateUsers } from '../model/createUsers';

export class UsersService {
  private users: Model<any>;
  constructor(users: Model<any>) {
    this.users = users;
  }

  /**
   * Create user
   * @param params
   */
  protected async createUser (params: CreateUsers): Promise<object> {
    try {
      const result = await this.users.create({
        name: params.name,
        id: params.id,
        email: params.email,
        address: params.address,
        phoneNumber: params.phoneNumber,
        country: params.country,
        skill: params.skill
      });

      return result;
    } catch (err) {
      console.error(err);

      throw err;
    }
  }

  /**
   * Update a user by id
   * @param id
   * @param data
   */
  protected updateUsers (id: number, data: object) {
    return this.users.findOneAndUpdate(
      { id },
      { $set: data },
      { new: true },
    );
  }

  /**
   * Find users
   */
  protected findUsers () {
    return this.users.find();
  }

  /**
   * Query user by id
   * @param id
   */
  protected findOneUserById (id: number) {
    return this.users.findOne({ id });
  }

  /**
   * Delete user by id
   * @param id
   */
  protected deleteOneUserById (id: number) {
    return this.users.deleteOne({ id });
  }
}
