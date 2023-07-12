import React, { useEffect, useState } from "react";
import News from "../News/components/News";
import { getAllListPosts } from "../../services/apis/listPostNews";

const listNews = [
    {
        id: 1,
        title: 'Tổng hợp kết quả chất lượng nước thành phẩm từ ngày 29-30/9/2022',
        datetime: '11/10/2022 14:52:59',
        summary: 'Tổng hợp kết quả chất lượng nước thành phẩm NMN An Dương, Chi nhánh Cấp nước Hải Phòng 3, 4, 8, Chi nhánh Cấp nước Vĩnh Bảo, Minh Đức, Cát Bà, Ngũ Lão từ ngày 29-30//9/2022',
        image: require('../../common/images/image-quantity.png')
    },
    {
        id: 2,
        title: 'Tổng hợp kết quả chất lượng nước thành phẩm từ ngày 29-30/9/2022',
        datetime: '11/10/2022 14:52:59',
        summary: 'Tổng hợp kết quả chất lượng nước thành phẩm NMN An Dương, Chi nhánh Cấp nước Hải Phòng 3, 4, 8, Chi nhánh Cấp nước Vĩnh Bảo, Minh Đức, Cát Bà, Ngũ Lão từ ngày 29-30//9/2022',
        image: require('../../common/images/image-quantity.png')
    },
    {
        id: 3,
        title: 'Tổng hợp kết quả chất lượng nước thành phẩm từ ngày 29-30/9/2022',
        datetime: '11/10/2022 14:52:59',
        summary: 'Tổng hợp kết quả chất lượng nước thành phẩm NMN An Dương, Chi nhánh Cấp nước Hải Phòng 3, 4, 8, Chi nhánh Cấp nước Vĩnh Bảo, Minh Đức, Cát Bà, Ngũ Lão từ ngày 29-30//9/2022',
        image: require('../../common/images/image-quantity.png')
    }
]



const Quality = () => {

    const [dataNews, setDataNews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        const getListNewQuality = async () => {
            const res = await getAllListPosts({
                PageSize: 20,
                CurrentPage: currentPage,
                CategoryPostID: "3fa85f64-5717-4562-b3fc-2c963f66afa6"
            });
            setDataNews(res.Object.data);
            console.log(res.Object);
        }
        getListNewQuality()
    })

    return( <News
        title={'Kiểm tra chất lượng nước'}
        listNews={listNews}
        
        
    />);
};

export default Quality;
