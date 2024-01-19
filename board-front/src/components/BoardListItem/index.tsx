import React from 'react';
import './style.css';

//      component: Board List Item 컴포넌트         //
export default function BoardListItem() {

    //      render: Board List Item 컴포넌트 렌더링     //
    return (
        <div className='board-list-item'>
            <div className='board-list-item-main-box'>
                <div className='board-list-item-top'>
                    <div className='board-list-item-profile-box'>
                        <div className='board-list-item-profile-image' style={{ backgroundImage: `url(/탱.png)` }}></div>
                    </div>
                    <div className='board-list-item-write-box'>
                        <div className='board-list-item-nickname'>{'안녕하세요나는주코야키'}</div>
                        <div className='board-list-item-write-datetime'>{'2024. 01. 19.'}</div>
                    </div>
                </div>
                <div className='board-list-item-middle'>
                    <div className='board-list-item-title'>{'오늘 점심 뭐먹지 맛있는 거 먹고 싶은데 추천 부탁 오늘 점심 뭐먹지 맛있는 거 먹고 싶은데'}</div>
                    <div className='board-list-item-content'>{'오늘 점심을 뭐먹을 지 너무 고민이 되는 데 뭐 먹을까? 나 점심때 오늘 점심을 뭐먹을 지 너무 고민이 되는 데 뭐 먹을까? 오늘 점심을 뭐먹을 지 너무 고민이 되는 오늘 점심을 뭐먹을 지 너무 고민이 되는 데 뭐 먹을까? 나 점심때 ...'}</div>
                </div>
                <div className='board-list-item-bottom'>
                    <div className='board-list-item-counts'>
                        {`댓글 0 · 좋아요 0 · 조회수 0`}
                    </div>
                </div>
            </div>
            <div className='board-list-item-image-box'>
                <div className='board-list-item-image' style={{ backgroundImage: `url(https://www.google.com/imgres?imgurl=https%3A%2F%2Fimgv3.fotor.com%2Fimages%2Fshare%2FFree-pink-gradient-aesthetic-background-from-Fotor.jpg&tbnid=QjFdmeOoOm3HbM&vet=12ahUKEwiGxfS7lumDAxVMX_UHHSl0CKoQMygVegQIARB-..i&imgrefurl=https%3A%2F%2Fwww.fotor.com%2Fimages%2Faesthetic-background%2F&docid=GieqUOJehHvXUM&w=2000&h=2000&q=background%20image&ved=2ahUKEwiGxfS7lumDAxVMX_UHHSl0CKoQMygVegQIARB-)` }}></div>
            </div>
        </div>
    )
}
