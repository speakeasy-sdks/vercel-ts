/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { userGetAuthUser } from "../funcs/userGetAuthUser.js";
import { userRequestDelete } from "../funcs/userRequestDelete.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { GetAuthUserResponseBody } from "../models/getauthuserop.js";
import {
  RequestDeleteRequestBody,
  RequestDeleteResponseBody,
} from "../models/requestdeleteop.js";
import { unwrapAsync } from "../types/fp.js";

export class User extends ClientSDK {
  /**
   * Get the User
   *
   * @remarks
   * Retrieves information related to the currently authenticated User.
   */
  async getAuthUser(
    options?: RequestOptions,
  ): Promise<GetAuthUserResponseBody | undefined> {
    return unwrapAsync(userGetAuthUser(
      this,
      options,
    ));
  }

  /**
   * Delete User Account
   *
   * @remarks
   * Initiates the deletion process for the currently authenticated User, by sending a deletion confirmation email. The email contains a link that the user needs to visit in order to proceed with the deletion process.
   */
  async requestDelete(
    request?: RequestDeleteRequestBody | undefined,
    options?: RequestOptions,
  ): Promise<RequestDeleteResponseBody> {
    return unwrapAsync(userRequestDelete(
      this,
      request,
      options,
    ));
  }
}
