export default interface Board {
    
    boardNumber: number;
    title: string;
    content: string;
    boardImageList: string[];
    writeDatetime: string;
    wrtierEmail: string;
    writerNickname: string;
    writerProfileImage: string | null;
    
}