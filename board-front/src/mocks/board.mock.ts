import { Board } from 'types/interface';
import img from 'assets/image/탱.png';

const boardMock: Board = {
    boardNumber: 1,
    title: '오늘 점심 뭐먹지 맛있는 거 먹고 싶은데 추천 부탁 오늘 점심 뭐먹지 맛있는 거 먹고 싶은데',
    content: '오늘 점심을 뭐먹을 지 너무 고민이 되는 데 뭐 먹을까? 나 점심때 오늘 점심을 뭐먹을 지 너무 고민이 되는 데 뭐 먹을까? 오늘 점심을 뭐먹을 지 너무 고민이 되는 오늘 점심을 뭐먹을 지 너무 고민이 되는 데 뭐 먹을까? 나 점심때 ...',
    boardImageList: [`${img}`, 'https://img.khan.co.kr/news/2023/01/02/news-p.v1.20230102.1f95577a65fc42a79ae7f990b39e7c21_P1.png'],
    writeDatetime: '2024. 01. 31.',
    wrtierEmail: 'email3@email.com',
    writerNickname: '안녕하세요나는주코야끼',
    writerProfileImage: 'https://img.khan.co.kr/news/2023/01/02/news-p.v1.20230102.1f95577a65fc42a79ae7f990b39e7c21_P1.png',
}

export default boardMock;