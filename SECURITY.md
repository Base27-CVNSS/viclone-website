# 🔐 Chính sách bảo mật

## Phiên bản được hỗ trợ

ViClone Website là một **template** thay vì thư viện phát hành theo nhiều nhánh phiên bản. Các bản sửa bảo mật được áp dụng cho trạng thái mới nhất của nhánh `master`.

Các dự án được tạo từ template **không tự động nhận bản vá**. Người duy trì từng bản sao có trách nhiệm theo dõi thay đổi, đánh giá mức ảnh hưởng và cập nhật repository của mình.

## Báo cáo lỗ hổng

**Không công khai chi tiết lỗ hổng** trong issue, pull request, discussion, comment hoặc kênh cộng đồng.

Nếu repository bật GitHub Security Advisories, hãy dùng chức năng **Report a vulnerability** trong tab Security của repository này. Khi báo cáo, nên cung cấp:

- mô tả rõ lỗ hổng và ảnh hưởng tiềm năng;
- file, dependency, cấu hình hoặc commit bị ảnh hưởng;
- các bước tái hiện hoặc proof-of-concept tối thiểu;
- điều kiện cần thiết để khai thác;
- biện pháp giảm thiểu hoặc bản vá đề xuất nếu có.

Nếu vấn đề có nguồn gốc từ dự án upstream, bạn cũng nên cân nhắc báo cáo cho **JCodesMore/ai-website-cloner-template** qua kênh bảo mật chính thức của dự án gốc.

## Phạm vi tiếp nhận

Báo cáo bảo mật có thể liên quan đến:

- mã nguồn và dependency trên nhánh `master`;
- script hỗ trợ và script đồng bộ trong `scripts/`;
- cấu hình repository hoặc giá trị mặc định có thể làm dự án sinh ra kém an toàn;
- hướng dẫn cho AI agent nếu chúng trực tiếp tạo ra hành vi bảo mật nguy hiểm;
- nguy cơ lộ secret, token, cookie hoặc thông tin xác thực do workflow;
- lỗ hổng trong scaffold Next.js thuộc chính template này.

Ngoài phạm vi:

- lỗ hổng của website bên thứ ba không thuộc quyền quản lý của repository;
- mã website được người dùng sinh ra sau khi đã tách khỏi template;
- dịch vụ bên thứ ba không do dự án kiểm soát;
- báo cáo tự động không chứng minh được tác động thực tế;
- yêu cầu hỗ trợ khai thác trái phép website khác.

## Nguyên tắc sử dụng an toàn

Template này được thiết kế cho các trường hợp **được ủy quyền** như phát triển phần mềm, migration, khôi phục frontend, nghiên cứu và học tập.

Không sử dụng workflow để:

- thu thập thông tin đăng nhập trái phép;
- dựng trang phishing hoặc giả mạo tổ chức/cá nhân;
- né tránh cơ chế kiểm soát truy cập;
- lấy token, cookie, session hoặc dữ liệu riêng tư;
- sao chép nội dung/tài sản trái với quyền sở hữu hoặc điều khoản sử dụng;
- khai thác lỗ hổng của website mục tiêu.

## Secret và dữ liệu nhạy cảm

Khi phát triển hoặc kiểm thử:

- không commit `.env` chứa secret;
- không đưa API key, access token, cookie hoặc session vào prompt/log công khai;
- không lưu dữ liệu người dùng thật trong `docs/research/` hoặc ảnh chụp tham chiếu nếu không cần thiết;
- rà soát asset tải về trước khi commit;
- dùng secret manager hoặc biến môi trường cho thông tin nhạy cảm.

## Công bố có trách nhiệm

Mục tiêu là xác minh vấn đề, đánh giá ảnh hưởng, chuẩn bị bản vá và phối hợp công bố khi phù hợp. Vui lòng tránh phát hành proof-of-concept khai thác công khai trước khi người duy trì có cơ hội xử lý hợp lý.

Xem thêm phần **Sử dụng có trách nhiệm** trong [`README.md`](README.md#️-sử-dụng-có-trách-nhiệm).
