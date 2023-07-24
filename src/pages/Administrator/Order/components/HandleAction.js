import { GetAllOrderForAdmin, UpdateOrder } from "../../../../services/apis/Order";

// export const fetchData = async () => {
//     try {
//         await GetAllOrderForAdmin({
//             CurrentPage: 1,
//             PageSize: 20,
//             Status: 0,
//             TextSearch: "",
//         });
        
//     } catch (error) {
//         console.error('Error fetching orders:', error);
//     }
// };
export const handleConfirmOrder = async (record) => {
    try {
        // Gọi API UpdateOrder với thông tin cần thiết
        const response = await UpdateOrder({
            OrderListID: [
                record.OrderID
            ],
            StatusOrder: 2

        }

        );
        console.log('Order confirmed:', response);

        // (Optional) Cập nhật lại danh sách đơn hàng sau khi Update thành công
        // Gọi lại API GetAllOrderForAdmin hoặc cập nhật dữ liệu tại đây nếu cần

    } catch (error) {
        console.error('Error confirming order:', error);
    }
};
export const handleCompleteOrder = async (record) => {
    try {
        // Gọi API UpdateOrder với thông tin cần thiết
        const response = await UpdateOrder({
            OrderListID: [
                record.OrderID
            ],
            StatusOrder: 3

        }

        );
        console.log('Order confirmed:', response);

    } catch (error) {
        console.error('Error confirming order:', error);
    }
};
export const handleDeleteOrder = async (record) => {
    try {
        // Gọi API UpdateOrder với thông tin cần thiết
        const response = await UpdateOrder({
            OrderListID: [
                record.OrderID
            ],
            StatusOrder: 3

        }

        );
        console.log('Order confirmed:', response);

    } catch (error) {
        console.error('Error confirming order:', error);
    }
};