import { DAT_GHE, HUY_GHE } from "../types/BauTapDatVeType";

const stateDefault = {
    danhSachGheDangDat: []
}

const BaiTapDatVeReducer = (state=stateDefault,action) => {
    switch(action.type){

        case DAT_GHE: {

            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
            // Tìm ra ghế đang đặt trong mảng danhSachGheDangDatUpdate
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat=>
            gheDangDat.soGhe === action.ghe.soGhe);
            // Khi người dùng click Ghế đang đặt đã tồn tại trong mảng danhSachGheDangDatUpdate
            // => remove đi
                if(index !== -1){
                    danhSachGheDangDatUpdate.splice(index,1);
                }else
                // Khi người dùng click Ghế đang đặt chưa có trong mảng danhSachGheDangDatUpdate
                // => push vào mảng danhSachGheDangDatUpdate
                {
                    danhSachGheDangDatUpdate.push(action.ghe);
                }
                // Cập nhật lại state => render lại giao diện
                state.danhSachGheDangDat = danhSachGheDangDatUpdate;
                return {...state};
        }

        case HUY_GHE: {
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
            // Tìm ra ghế đang đặt trong mảng danhSachGheDangDatUpdate
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat=>
            gheDangDat.soGhe === action.soGhe);
            // Khi người dùng click Ghế đang đặt đã tồn tại trong mảng danhSachGheDangDatUpdate
            // => remove đi
                if(index !== -1){
                    danhSachGheDangDatUpdate.splice(index,1);
                }
                // Cập nhật lại state => render lại giao diện
                state.danhSachGheDangDat = danhSachGheDangDatUpdate;
                return {...state};
        }
        default: return {...state}
    }
}

export default BaiTapDatVeReducer;