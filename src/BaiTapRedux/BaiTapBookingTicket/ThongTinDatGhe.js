import React, { Component } from 'react';
import {connect} from 'react-redux';
import {huyGheAction} from '../../redux/actions/BaiTapDatVeActions'

class ThongTinDatGhe extends Component {
    render() {
        return (
            <div>
                <div className="mt-5">
                    <button className="gheDuocChon mr-2"></button> <span
                    className="text-light" style={{fontSize:'30px'}}>Ghế đã đặt</span>
                    <br/> 
                    <button className="gheDangChon mr-2"></button> <span
                    className="text-light" style={{fontSize:'30px'}}>Ghế đang đặt</span> 
                    <br/>
                    <button className="ghe mr-2" style={{marginLeft:0}}></button> <span
                    className="text-light" style={{fontSize:'30px'}}>Ghế chưa đặt</span> 
                </div>

                <div className="mt-5">
                    <table class="table" border="2">
                        <thead>
                            <tr className="text-light" style={{fontSize:25}}>
                                <th>Số ghế</th>
                                <th>Giá</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.danhSachGheDangDat.map((gheDangDat, index)=>{
                                return <tr className="text-warning" key={index}>
                                    <td>{gheDangDat.soGhe}</td>
                                    <td>{gheDangDat.gia.toLocaleString()}</td>
                                    <td>
                                        <button onClick={()=>
                                        this.props.dispatch(huyGheAction(gheDangDat.soGhe))
                                        }>Hủy</button>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                        <tfoot>
                            <tr className="text-warning">
                                <td></td>
                                <td>Tổng Tiền</td>
                                <td >
                                    {this.props.danhSachGheDangDat.reduce((tongTien,gheDangDat,index)=>{
                                        return tongTien+= gheDangDat.gia;
                                    },0).toLocaleString()}
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat
    }
    
}


export default connect(mapStateToProps)(ThongTinDatGhe);


