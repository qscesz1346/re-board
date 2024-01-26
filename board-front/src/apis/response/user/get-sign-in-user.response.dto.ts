import { User } from 'types/interface';
import ResponseDto from '../response.dto';

export default interface GetSignInUserResponseDto extends ResponseDto, User {
    // email: string;       // 생략가능
    // nickname: string;
    // profileImage: string | null;
}