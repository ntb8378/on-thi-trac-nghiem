/**
 * QuizMaster Pro - Ứng dụng Ôn & Thi Trắc Nghiệm Thông Minh
 * Quản lý đề cương, parse tài liệu không cắt bớt nội dung, ôn tập flashcard & thi thử
 */

// ===================================================================
// DỮ LIỆU ĐỀ THI MẪU (Preloaded Sample Data)
// Giúp người dùng trải nghiệm ngay lập tức các tính năng
// ===================================================================
const KNGT_BANK = {
  "id": "bank_kngt_gdsk_150_official",
  "title": "Đề Cương Ôn Thi: Kỹ Năng Giao Tiếp – Giáo Dục Sức Khỏe (150 Câu Chuẩn)",
  "createdAt": "2026-10-22T19:00:00.000Z",
  "tags": [
    "KNGT",
    "GDSK",
    "Y Dược"
  ],
  "questions": [
    {
      "id": "kngt_q_1",
      "index": 1,
      "question": "Theo mô hình Các giai đoạn thay đổi hành vi, trình tự nào sau đây của các giai đoạn là phù ợp?",
      "options": [
        {
          "key": "A",
          "text": "Chưa biết  Biết  Làm  Muốn  Duy trì  Thụt lùi"
        },
        {
          "key": "B",
          "text": "Chưa biết  Biết  Muốn  Làm  Duy trì  Thụt lùi"
        },
        {
          "key": "C",
          "text": "Thụt lùi  Muốn  Chưa biết  Biết  Làm  Duy trì"
        },
        {
          "key": "D",
          "text": "Thụt lùi  Chưa biết  Biết  Muốn  Làm  Duy trì"
        }
      ],
      "correctAnswer": "B",
      "explanation": ""
    },
    {
      "id": "kngt_q_2",
      "index": 2,
      "question": "Khi khám chữa bệnh, giao tiếp tốt:",
      "options": [
        {
          "key": "A",
          "text": "Là không cần thiết"
        },
        {
          "key": "B",
          "text": "Giúp cho NB có mối quan hệ tốt với NVYT"
        },
        {
          "key": "C",
          "text": "Rất quan trọng để NB an tâm"
        },
        {
          "key": "D",
          "text": "Một trong những yếu tố quyết định hiệu quả hoạt động của người NVYT"
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "kngt_q_3",
      "index": 3,
      "question": "Tư vấn sức khỏe là hình thức giáo dục sức khỏe cho:",
      "options": [
        {
          "key": "A",
          "text": "Đại chúng"
        },
        {
          "key": "B",
          "text": "Nhóm nhỏ"
        },
        {
          "key": "C",
          "text": "Nhóm lớn"
        },
        {
          "key": "D",
          "text": "Cá nhân"
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "kngt_q_4",
      "index": 4,
      "question": "Người bệnh muốn biết bệnh mình nặng hay nhẹ, thầy thuốc cần phải:",
      "options": [
        {
          "key": "A",
          "text": "Báo cho NB biết họ bệnh nặng hay nhẹ ngay để họ an tâm"
        },
        {
          "key": "B",
          "text": "Nói cho họ biết họ mắc bệnh nặng"
        },
        {
          "key": "C",
          "text": "Chỉ nói khi họ mắc bệnh nhẹ"
        },
        {
          "key": "D",
          "text": "Không nên nói bệnh nặng hay nhẹ mà chỉ giải thích bệnh tật cho NB vì diễn biến bệnh phức tạp và khó tiên lượng"
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "kngt_q_5",
      "index": 5,
      "question": "Ai là người thực hiện việc TT-GDSK:",
      "options": [
        {
          "key": "A",
          "text": "Nhân viên y tế"
        },
        {
          "key": "B",
          "text": "Chuyên gia"
        },
        {
          "key": "C",
          "text": "Lãnh đạo các cấp"
        },
        {
          "key": "D",
          "text": "Bất kì ai"
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "kngt_q_6",
      "index": 6,
      "question": "Ba yếu tố tâm lý ảnh hưởng đến hành vi:",
      "options": [
        {
          "key": "A",
          "text": "Cảm xúc, tình cảm"
        },
        {
          "key": "B",
          "text": "Nhận thức, lý trí"
        },
        {
          "key": "C",
          "text": "Động cơ, ý chí"
        },
        {
          "key": "D",
          "text": "Tất cả đều đúng"
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "kngt_q_7",
      "index": 7,
      "question": "Các giai đoạn trong một quá trình thay đổi hành vi của một cá nhân",
      "options": [
        {
          "key": "A",
          "text": "Chưa biết, biết, làm, duy trì"
        },
        {
          "key": "B",
          "text": "Chưa biết, biết, muốn, làm"
        },
        {
          "key": "C",
          "text": "Chưa biết, biết, muốn, làm, duy trì"
        },
        {
          "key": "D",
          "text": "Chưa biết, biết, làm, muốn, duy trì"
        }
      ],
      "correctAnswer": "C",
      "explanation": ""
    },
    {
      "id": "kngt_q_8",
      "index": 8,
      "question": "Sự khác nhau cốt lõi giữa khái niệm truyên truyền và truyền thông là gì?",
      "options": [
        {
          "key": "A",
          "text": "Người gửi thông tin khác nhau"
        },
        {
          "key": "B",
          "text": "Đối tượng tiếp nhận khác nhau"
        },
        {
          "key": "C",
          "text": "Tính tương tác giữa người gửi và người nhận"
        },
        {
          "key": "D",
          "text": "Kênh truyền tải khác nhau"
        }
      ],
      "correctAnswer": "C",
      "explanation": ""
    },
    {
      "id": "kngt_q_9",
      "index": 9,
      "question": "Điểm khác nhau cơ bản giữa quá trình truyền thông và quá trình thông tin sức khỏe là gì?",
      "options": [
        {
          "key": "A",
          "text": "Thu thập các thông tin"
        },
        {
          "key": "B",
          "text": "Chuyển tải các thông tin"
        },
        {
          "key": "C",
          "text": "Thu thập các thông tin phản hồi"
        },
        {
          "key": "D",
          "text": "Nội dung giáo dục sức khỏe"
        }
      ],
      "correctAnswer": "C",
      "explanation": ""
    },
    {
      "id": "kngt_q_10",
      "index": 10,
      "question": "Bạn hãy cho biết những định nghĩa nào sau đây mô tả chính xác nhất của giao tiếp?",
      "options": [
        {
          "key": "A",
          "text": "Giao tiếp là sự tương tác và trao đổi thông tin giữa người nói và người nghe."
        },
        {
          "key": "B",
          "text": "Giao tiếp chỉ mang tính chất thời điểm khi những đối tượng giao tiếp tiếp xúc cùng nhau."
        },
        {
          "key": "C",
          "text": "Giao tiếp là sự trao đổi thông tin giữa người với người bằng một hệ thống thông tin chung như lời nói, cử chỉ điệu bộ hay hành vi"
        },
        {
          "key": "D",
          "text": "Giao tiếp là quá trình truyền tải thông điệp một cách chính xác từ người nói đến người nghe."
        }
      ],
      "correctAnswer": "C",
      "explanation": ""
    },
    {
      "id": "kngt_q_11",
      "index": 11,
      "question": "Phân loại theo phương pháp giao tiếp được chia thành:",
      "options": [
        {
          "key": "A",
          "text": "Giao tiếp ngôn ngữ và phi ngôn ngữ"
        },
        {
          "key": "B",
          "text": "Giao tiếp trực tiếp và gián tiếp"
        },
        {
          "key": "C",
          "text": "Giao tiếp chính thức và và không chính thức"
        },
        {
          "key": "D",
          "text": "Giao tiếp cá nhân và nhóm"
        }
      ],
      "correctAnswer": "B",
      "explanation": ""
    },
    {
      "id": "kngt_q_12",
      "index": 12,
      "question": "Phân loại theo công cụ giao tiếp được chia thành:",
      "options": [
        {
          "key": "A",
          "text": "Giao tiếp có lời và không lời"
        },
        {
          "key": "B",
          "text": "Giao tiếp trực tiếp và gián tiếp"
        },
        {
          "key": "C",
          "text": "Giao tiếp chính thức và và không chính thức"
        },
        {
          "key": "D",
          "text": "Giao tiếp cá nhân và nhóm"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "kngt_q_13",
      "index": 13,
      "question": "Khi thực hiện kỹ năng hỏi bệnh sử trên người bệnh cần hỏi những yếu tố nào, Ngoại trừ:",
      "options": [
        {
          "key": "A",
          "text": "Lý do đến khám"
        },
        {
          "key": "B",
          "text": "Nhà có những ai mắc bệnh tương tự vậy"
        },
        {
          "key": "C",
          "text": "Bệnh bắt đầu từ khi nào"
        },
        {
          "key": "D",
          "text": "Đã điều trị như thế nào"
        }
      ],
      "correctAnswer": "B",
      "explanation": ""
    },
    {
      "id": "kngt_q_14",
      "index": 14,
      "question": "Khi thực hiện kỹ năng hỏi tiền sử trên người bệnh cần hỏi những yếu tố nào, Ngoại trừ:",
      "options": [
        {
          "key": "A",
          "text": "Bệnh có những triệu chứng nào"
        },
        {
          "key": "B",
          "text": "Nhà có những ai mắc bệnh tương tự vậy"
        },
        {
          "key": "C",
          "text": "Có dị ứng thuốc, thức ăn nào không"
        },
        {
          "key": "D",
          "text": "Thói quen ăn uống hằng ngày"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "kngt_q_15",
      "index": 15,
      "question": "Để giao tiếp ngôn ngữ hiệu quả thì không phụ thuộc yếu tố nào sau đây:",
      "options": [
        {
          "key": "A",
          "text": "Cách ăn mặc"
        },
        {
          "key": "B",
          "text": "Âm điệu, giọng nói"
        },
        {
          "key": "C",
          "text": "Âm tốc"
        },
        {
          "key": "D",
          "text": "Âm sắc"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "kngt_q_16",
      "index": 16,
      "question": "Đây không phải là kỹ năng khuyến khích trong giao tiếp:",
      "options": [
        {
          "key": "A",
          "text": "Chia sẻ với đối tượng giao tiếp"
        },
        {
          "key": "B",
          "text": "Quan tâm đến đối tương giao tiếp"
        },
        {
          "key": "C",
          "text": "Luôn tôn trọng đối tượng giao tiếp"
        },
        {
          "key": "D",
          "text": "Luôn khen ngợi đối tượng giao tiếp"
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "kngt_q_17",
      "index": 17,
      "question": "Giao tiếp với người bệnh là yếu tố quyết đinh:",
      "options": [
        {
          "key": "A",
          "text": "Thời gian điều trị"
        },
        {
          "key": "B",
          "text": "Nhân cách NVYT"
        },
        {
          "key": "C",
          "text": "Hiệu quả hoạt động của NVYT"
        },
        {
          "key": "D",
          "text": "Lòng tin người bệnh với NVYT"
        }
      ],
      "correctAnswer": "C",
      "explanation": ""
    },
    {
      "id": "kngt_q_18",
      "index": 18,
      "question": "Quá trình truyền thông là quá trình:",
      "options": [
        {
          "key": "A",
          "text": "Thông tin 2 chiều"
        },
        {
          "key": "B",
          "text": "Thông tin 1 chiều"
        },
        {
          "key": "C",
          "text": "Sử dụng thông tin"
        },
        {
          "key": "D",
          "text": "Thông tin nhiều chiều"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "kngt_q_19",
      "index": 19,
      "question": "Quá trình tuyên truyền là quá trình:",
      "options": [
        {
          "key": "A",
          "text": "Thông tin 2 chiều"
        },
        {
          "key": "B",
          "text": "Thông tin 1 chiều"
        },
        {
          "key": "C",
          "text": "Sử dụng thông tin"
        },
        {
          "key": "D",
          "text": "Thông tin nhiều chiều"
        }
      ],
      "correctAnswer": "B",
      "explanation": ""
    },
    {
      "id": "kngt_q_20",
      "index": 20,
      "question": "Cung cấp thông tin hai chiều, có mục tiêu và đối tượng cụ thể là những đặc điểm của hoạt động nào sau đây?",
      "options": [
        {
          "key": "A",
          "text": "Thông tin"
        },
        {
          "key": "B",
          "text": "Tuyên truyền"
        },
        {
          "key": "C",
          "text": "Truyền thông"
        },
        {
          "key": "D",
          "text": "Giáo dục"
        }
      ],
      "correctAnswer": "C",
      "explanation": ""
    },
    {
      "id": "kngt_q_21",
      "index": 21,
      "question": "Thường áp dụng với những chủ trương, chính sách, đường lối của nhà nước là đặc tính của hoạt động nào sau đây?",
      "options": [
        {
          "key": "A",
          "text": "Thông tin"
        },
        {
          "key": "B",
          "text": "Tuyên truyền"
        },
        {
          "key": "C",
          "text": "Truyền thông"
        },
        {
          "key": "D",
          "text": "Giáo dục"
        }
      ],
      "correctAnswer": "B",
      "explanation": ""
    },
    {
      "id": "kngt_q_22",
      "index": 22,
      "question": "Điền vào chỗ trống: Giáo dục sức khỏe là một. . . .  (1).. .  thông qua các hoạt động thông tin, giáo dục, truyền thông nhằm tác động vào các cá nhân, nhóm hay cộng đồng sao cho để họ có thể đạt được. . .  (2).. .  cho sức khỏe bằng chính. . .  (3)..  cá nhân của họ. Cụm từ điền vào vị trí số (1) là. . .",
      "options": [
        {
          "key": "A",
          "text": "Quá trình"
        },
        {
          "key": "B",
          "text": "Nỗ lực"
        },
        {
          "key": "C",
          "text": "Hành vi có lợi"
        },
        {
          "key": "D",
          "text": "Giai đoạn"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "kngt_q_23",
      "index": 23,
      "question": "Điền vào chỗ trống: Giáo dục sức khỏe là một. . . .  (1).. .  thông qua các hoạt động thông tin, giáo dục, truyền thông nhằm tác động vào các cá nhân, nhóm hay cộng đồng sao cho để họ có thể đạt được. . .  (2).. .  cho sức khỏe bằng chính. . .  (3)..  cá nhân của họ. Cụm từ điền vào vị trí số (2) là. . .",
      "options": [
        {
          "key": "A",
          "text": "Quá trình"
        },
        {
          "key": "B",
          "text": "Nỗ lực"
        },
        {
          "key": "C",
          "text": "Hành vi có lợi"
        },
        {
          "key": "D",
          "text": "Giai đoạn"
        }
      ],
      "correctAnswer": "C",
      "explanation": ""
    },
    {
      "id": "kngt_q_24",
      "index": 24,
      "question": "Điền vào chỗ trống: Giáo dục sức khỏe là một. . . .  (1).. .  thông qua các hoạt động thông tin, giáo dục, truyền thông nhằm tác động vào các cá nhân, nhóm hay cộng đồng sao cho để họ có thể đạt được. . .  (2).. .  cho sức khỏe bằng chính. . .  (3)..  cá nhân của họ. Cụm từ điền vào vị trí số (3) là. . .",
      "options": [
        {
          "key": "A",
          "text": "Quá trình"
        },
        {
          "key": "B",
          "text": "Nỗ lực"
        },
        {
          "key": "C",
          "text": "Hành vi có lợi"
        },
        {
          "key": "D",
          "text": "Giai đoạn"
        }
      ],
      "correctAnswer": "B",
      "explanation": ""
    },
    {
      "id": "kngt_q_25",
      "index": 25,
      "question": "Theo sơ đồ các thành phần của một tiến trình truyền thông, mã hóa là quá trình:",
      "options": [
        {
          "key": "A",
          "text": "Thông tin sức khỏe đi từ suy nghĩ của người gửi trở thành thông điệp sức khỏe"
        },
        {
          "key": "B",
          "text": "Thông tin sức khỏe đi từ suy nghĩ của người nhận trở thành kênh truyền tải"
        },
        {
          "key": "C",
          "text": "Người nhận lí giải các thông điệp sức khỏe"
        },
        {
          "key": "D",
          "text": "Thông tin sức khỏe đi từ suy nghĩ của người nhận trở lại cho người gửi"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "kngt_q_26",
      "index": 26,
      "question": "Theo sơ đồ các thành phần của một tiến trình truyền thông, giải mã là quá trình:",
      "options": [
        {
          "key": "A",
          "text": "Thông tin sức khỏe đi từ suy nghĩ của người gửi trở thành thông điệp sức khỏe"
        },
        {
          "key": "B",
          "text": "Thông tin sức khỏe đi từ suy nghĩ của người nhận trở thành kênh truyền tải"
        },
        {
          "key": "C",
          "text": "Người nhận lí giải các thông điệp sức khỏe"
        },
        {
          "key": "D",
          "text": "Thông tin sức khỏe đi từ suy nghĩ của người nhận trở lại cho người gửi"
        }
      ],
      "correctAnswer": "C",
      "explanation": ""
    },
    {
      "id": "kngt_q_27",
      "index": 27,
      "question": "Trong các thành phần của một tiến trình truyền thông, quá trình mà người gửi xác định nội dung muốn truyền tải và thiết kế chúng thành một thông điệp gọi là:",
      "options": [
        {
          "key": "A",
          "text": "Sản xuất thông điệp"
        },
        {
          "key": "B",
          "text": "Mã hóa"
        },
        {
          "key": "C",
          "text": "Giải mã"
        },
        {
          "key": "D",
          "text": "Phân tích thông điệp"
        }
      ],
      "correctAnswer": "B",
      "explanation": ""
    },
    {
      "id": "kngt_q_28",
      "index": 28,
      "question": "Trong các thành phần của một tiến trình truyền thông, quá trình mà người nhận gán ý nghĩa cho những gì họ tiếp nhận gọi là:",
      "options": [
        {
          "key": "A",
          "text": "Sản xuất thông điệp"
        },
        {
          "key": "B",
          "text": "Mã hóa"
        },
        {
          "key": "C",
          "text": "Giải mã"
        },
        {
          "key": "D",
          "text": "Phân tích thông điệp"
        }
      ],
      "correctAnswer": "C",
      "explanation": ""
    },
    {
      "id": "kngt_q_29",
      "index": 29,
      "question": "Là một tiến trình thông qua các hoạt động thông tin, giáo dục, truyền thông nhằm tác động vào các cá nhân, nhóm hay cộng đồng sao cho để họ có thể đạt được hành vi có lợi  cho sức khỏe bằng chính nỗ lực cá nhân của họ, đây là định nghĩa của:",
      "options": [
        {
          "key": "A",
          "text": "Giáo dục"
        },
        {
          "key": "B",
          "text": "Giáo dục sức khỏe"
        },
        {
          "key": "C",
          "text": "Giáo dục cộng đồng"
        },
        {
          "key": "D",
          "text": "Truyền thông sức khỏe"
        }
      ],
      "correctAnswer": "B",
      "explanation": ""
    },
    {
      "id": "kngt_q_30",
      "index": 30,
      "question": "Theo sơ đồ các thành phần của một tiến trình truyền thông, phản hồi là quá trình:",
      "options": [
        {
          "key": "A",
          "text": "Thông tin sức khỏe đi từ suy nghĩ của người gửi trở thành thông điệp sức khỏe"
        },
        {
          "key": "B",
          "text": "Thông tin sức khỏe đi từ suy nghĩ của người nhận trở thành kênh truyền tải"
        },
        {
          "key": "C",
          "text": "Người nhận lí giải các thông điệp sức khỏe"
        },
        {
          "key": "D",
          "text": "Thông tin sức khỏe đi từ suy nghĩ của người nhận trở lại cho người gửi"
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "kngt_q_31",
      "index": 31,
      "question": "Định nghĩa nào sau đây là đúng nhất khi nói về khái niệm sức khỏe theo Tổ chức Y tế Thế giới?",
      "options": [
        {
          "key": "A",
          "text": "Là một tình trạng hoàn toàn sảng khoái về thể chất và tâm thần, chứ không phải chỉ là không có bệnh hay tật"
        },
        {
          "key": "B",
          "text": "Là một tình trạng hoàn toàn sảng khoái về thể chất và xã hội, chứ không phải chỉ là không có bệnh hay tật"
        },
        {
          "key": "C",
          "text": "Là một tình trạng hoàn toàn sảng khoái về thể chất, tâm thần và xã hội"
        },
        {
          "key": "D",
          "text": "Là một tình trạng hoàn toàn sảng khoái về thể chất, tâm thần và xã hội, chứ không phải chỉ là không có bệnh hay tật"
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "kngt_q_32",
      "index": 32,
      "question": "Theo WHO, sức khỏe không phải chỉ là không có bệnh tật hoặc là tàn phế mà là:",
      "options": [
        {
          "key": "A",
          "text": "Một tình trạng hoàn toàn sảng khoái về thể chất, tâm thần và xã hội"
        },
        {
          "key": "B",
          "text": "Một tình trạng hoàn toàn sảng khoái về thể chất và xã hội"
        },
        {
          "key": "C",
          "text": "Một tình trạng hoàn toàn sảng khoái về thể chất và tâm thần"
        },
        {
          "key": "D",
          "text": "Một tình trạng hoàn toàn sảng khoái về môi trường sống chung quanh"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "kngt_q_33",
      "index": 33,
      "question": "“Một quá trình tác động một cách có hệ thống đến sự phát triển tinh thần, thể chất của một đối tượng nào đó, dần dần làm cho đối tượng có được những phẩm chất và năng lực như mong muốn” là khái niệm nào trong số những khái niệm sau đây?",
      "options": [
        {
          "key": "A",
          "text": "Giáo dục"
        },
        {
          "key": "B",
          "text": "Giáo dục sức khỏe"
        },
        {
          "key": "C",
          "text": "Giáo dục cộng đồng"
        },
        {
          "key": "D",
          "text": "Truyền thông sức khỏe"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "kngt_q_34",
      "index": 34,
      "question": "Đây là một quá trình tạo điều kiện thuận lợi cho người dân nhằm tăng cường khả năng kiểm soát và cải thiện sức khỏe của họ, đây là định nghĩa của:",
      "options": [
        {
          "key": "A",
          "text": "Giáo dục sức khỏe"
        },
        {
          "key": "B",
          "text": "Giáo dục cộng đồng"
        },
        {
          "key": "C",
          "text": "Truyền thông sức khỏe"
        },
        {
          "key": "D",
          "text": "Nâng cao sức khỏe"
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "kngt_q_35",
      "index": 35,
      "question": "Giáo dục sức khỏe là gì?",
      "options": [
        {
          "key": "A",
          "text": "Là một tiến trình, thông qua các hoạt động thông tin, giáo dục, tuyên truyền nhằm để đối tượng thực hiện các hành vi có lợi cho sức khỏe bằng chính nỗ lực của họ"
        },
        {
          "key": "B",
          "text": "Là một tiến trình, thông qua các hoạt động thông tin, giáo dục, tuyên truyền nhằm để đối tượng thực hiện các hành vi có lợi cho sức khỏe bằng chính nỗ lực của ngành y tế"
        },
        {
          "key": "C",
          "text": "Là một tiến trình, thông qua các hoạt động thông tin, giáo dục, truyền thông nhằm để đối tượng thực hiện các hành vi có lợi cho sức khỏe bằng chính nỗ lực cá nhân của họ"
        },
        {
          "key": "D",
          "text": "Là một tiến trình, thông qua các hoạt động thông tin, giáo dục, truyền thông nhằm để đối tượng thực hiện các hành vi có lợi cho sức khỏe bắng chính nỗ lực của ngành y tế"
        }
      ],
      "correctAnswer": "C",
      "explanation": ""
    },
    {
      "id": "kngt_q_36",
      "index": 36,
      "question": "Chọn câu ĐÚNG NHẤT. Hình thức trao đổi thông tin nào sau đây là truyền thông trực tiếp?",
      "options": [
        {
          "key": "A",
          "text": "Nam gửi email cho Tuấn"
        },
        {
          "key": "B",
          "text": "Nam gửi thư cho Tuấn"
        },
        {
          "key": "C",
          "text": "Nam đang nói chuyện với nhau với Tuấn qua facebook"
        },
        {
          "key": "D",
          "text": "Nam nhắn tin hỏi Tuấn về bài tập"
        }
      ],
      "correctAnswer": "C",
      "explanation": ""
    },
    {
      "id": "kngt_q_37",
      "index": 37,
      "question": "Vấn đề quan trọng nhất của truyền thông là:",
      "options": [
        {
          "key": "A",
          "text": "Đảm bảo hiệu quả được lan rộng"
        },
        {
          "key": "B",
          "text": "Tiết kiệm chi phí"
        },
        {
          "key": "C",
          "text": "Truyền tải đúng thông tin"
        },
        {
          "key": "D",
          "text": "Tương tác càng nhiều càng tốt"
        }
      ],
      "correctAnswer": "C",
      "explanation": ""
    },
    {
      "id": "kngt_q_38",
      "index": 38,
      "question": "Định nghĩa giáo dục sức khỏe, chọn câu SAI.",
      "options": [
        {
          "key": "A",
          "text": "Là một tiến trình"
        },
        {
          "key": "B",
          "text": "Thông qua các hoạt động thông tin, giáo dục, truyền thông"
        },
        {
          "key": "C",
          "text": "Có được những hành vi, những thói quen có lợi cho sức khỏe"
        },
        {
          "key": "D",
          "text": "Bằng cách làm giúp đỡ người dân đạt mục tiêu nhanh và hiệu quả"
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "kngt_q_39",
      "index": 39,
      "question": "Ai là người có thể thực hiện công tác giáo dục sức khỏe?",
      "options": [
        {
          "key": "A",
          "text": "Nhân viên y tế"
        },
        {
          "key": "B",
          "text": "Chuyên gia"
        },
        {
          "key": "C",
          "text": "Lãnh đạo các cấp"
        },
        {
          "key": "D",
          "text": "Bất kì ai được huấn luyện phù hợp"
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "kngt_q_40",
      "index": 40,
      "question": "Phát biểu nào sau đây ĐÚNG NHẤT khi nói về mối quan hệ giữa giáo dục sức khỏe (GDSK) và nâng cao sức khỏe (NCSK).",
      "options": [
        {
          "key": "A",
          "text": "GDSK là một phần của NCSK"
        },
        {
          "key": "B",
          "text": "NCSK là một phần của GDSK"
        },
        {
          "key": "C",
          "text": "GDSK là phần quan trọng nhất của NCSK"
        },
        {
          "key": "D",
          "text": "NCSK là phần quan trọng nhất của GDSK"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "kngt_q_41",
      "index": 41,
      "question": "Nhận định nào sau đây là đúng.",
      "options": [
        {
          "key": "A",
          "text": "Giáo dục sức khỏe chú trọng vào hành vi từng cá nhân và vào việc tạo ra môi trường hỗ trợ thuận lợi"
        },
        {
          "key": "B",
          "text": "Giáo dục sức khỏe chú trọng vào cộng đồng và vào việc tạo ra môi trường hỗ trợ thuận lợi"
        },
        {
          "key": "C",
          "text": "Nâng cao sức khỏe chú trọng vào hành vi từng cá nhân và vào việc tạo ra môi trường hỗ trợ thuận lợi"
        },
        {
          "key": "D",
          "text": "Nâng cao sức khỏe chú trọng vào cộng đồng và vào việc tạo ra môi trường hỗ trợ thuận lợi"
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "kngt_q_42",
      "index": 42,
      "question": "Hành vi có đặc điểm nào sau đây?",
      "options": [
        {
          "key": "A",
          "text": "Là sự biểu hiện ra bên ngoài của một người trong một tình huống cụ thể"
        },
        {
          "key": "B",
          "text": "Là sự ứng xử có chủ đích của một người trong một tình huống cụ thể"
        },
        {
          "key": "C",
          "text": "Là sự ứng xử của một người trong một tình huống cụ thể"
        },
        {
          "key": "D",
          "text": "Là sự ứng xử chủ quan của một người trong một tình huống cụ thể"
        }
      ],
      "correctAnswer": "C",
      "explanation": ""
    },
    {
      "id": "kngt_q_43",
      "index": 43,
      "question": "Hành vi chịu ảnh hưởng của các yếu tố bên trong sau đây, NGOẠI TRỪ:",
      "options": [
        {
          "key": "A",
          "text": "Kiến thức"
        },
        {
          "key": "B",
          "text": "Thái độ"
        },
        {
          "key": "C",
          "text": "Niềm tin"
        },
        {
          "key": "D",
          "text": "Văn hóa"
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "kngt_q_44",
      "index": 44,
      "question": "Hành vi chịu ảnh hưởng của các yếu tố bên ngoài sau đây, NGOẠI TRỪ:",
      "options": [
        {
          "key": "A",
          "text": "Chính trị"
        },
        {
          "key": "B",
          "text": "Văn hóa"
        },
        {
          "key": "C",
          "text": "Luật pháp"
        },
        {
          "key": "D",
          "text": "Cảm xúc"
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "kngt_q_45",
      "index": 45,
      "question": "Hành vi sức khỏe là",
      "options": [
        {
          "key": "A",
          "text": "Thói quen có hại cho sức khỏe"
        },
        {
          "key": "B",
          "text": "Hành vi ảnh hưởng có lợi hoặc có hại đến sức khỏe"
        },
        {
          "key": "C",
          "text": "Tập quán, thói quen có thể có lợi hoặc có hại cho sức khỏe"
        },
        {
          "key": "D",
          "text": "Lối sống có lợi cho sức khỏe"
        }
      ],
      "correctAnswer": "B",
      "explanation": ""
    },
    {
      "id": "kngt_q_46",
      "index": 46,
      "question": "Hành vi sức khỏe được phân thành các loại là hành vi có lợi, có hại hoặc không lợi không hại là cách phân loại theo:",
      "options": [
        {
          "key": "A",
          "text": "Kết quả của hành vi"
        },
        {
          "key": "B",
          "text": "Tiềm năng gây ra hậu quả của hành vi"
        },
        {
          "key": "C",
          "text": "Diễn tiến của bệnh"
        },
        {
          "key": "D",
          "text": "Nguồn gốc của hành vi"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "kngt_q_47",
      "index": 47,
      "question": "Hành vi được phân thành các loại là an toàn, nguy cơ hoặc nguy cơ cao là cách phân loại theo:",
      "options": [
        {
          "key": "A",
          "text": "Kết quả của hành vi"
        },
        {
          "key": "B",
          "text": "Tiềm năng gây ra hậu quả của hành vi"
        },
        {
          "key": "C",
          "text": "Diễn tiến của bệnh"
        },
        {
          "key": "D",
          "text": "Nguồn gốc của hành vi"
        }
      ],
      "correctAnswer": "B",
      "explanation": ""
    },
    {
      "id": "kngt_q_48",
      "index": 48,
      "question": "Theo diễn tiến của bệnh, việc tiêm vắc-xin là hành vi:",
      "options": [
        {
          "key": "A",
          "text": "Khi khỏe"
        },
        {
          "key": "B",
          "text": "Khi bắt đầu bệnh"
        },
        {
          "key": "C",
          "text": "Khi là Người bệnh"
        },
        {
          "key": "D",
          "text": "Khi gặp biến chứng"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "kngt_q_49",
      "index": 49,
      "question": "Các loại thực phẩm bị mốc có chứa chất Aflatoxin. Chất này đã được chứng minh là gây ra ung thư gan ở người. Theo phân loại hành vi sức khỏe dựa trên kết quả thì hành vi tiêu thụ các loại thực phẩm đã bị mốc này là:",
      "options": [
        {
          "key": "A",
          "text": "Hành vi trung gian"
        },
        {
          "key": "B",
          "text": "Hành vi nguy cơ cao"
        },
        {
          "key": "C",
          "text": "Hành vi có hại"
        },
        {
          "key": "D",
          "text": "Hành vi nguy cơ"
        }
      ],
      "correctAnswer": "C",
      "explanation": ""
    },
    {
      "id": "kngt_q_50",
      "index": 50,
      "question": "Một số người lớn có thói quen đeo vòng bạc cho trẻ với mong muốn trẻ sẽ khỏe mạnh. Hiện chưa ghi nhận chứng cứ khoa học cho thấy việc này có ảnh hưởng tốt hoặc không tốt gì đến sức khỏe của trẻ. Theo phân loại hành vi sức khỏe dựa trên kết quả thì hành vi đeo vòng bạc này là:",
      "options": [
        {
          "key": "A",
          "text": "Hành vi trung gian"
        },
        {
          "key": "B",
          "text": "Hành vi có lợi"
        },
        {
          "key": "C",
          "text": "Hành vi có hại"
        },
        {
          "key": "D",
          "text": "Hành vi nguy cơ"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "kngt_q_51",
      "index": 51,
      "question": "Theo tiềm năng gây ra hậu quả, hành vi không gây hại cho bản thân và người khác là loại hành vi nào sau đây?",
      "options": [
        {
          "key": "A",
          "text": "Hành vi an toàn"
        },
        {
          "key": "B",
          "text": "Hành vi có lợi"
        },
        {
          "key": "C",
          "text": "Hành vi rủi ro"
        },
        {
          "key": "D",
          "text": "Hành vi nguy cơ"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "kngt_q_52",
      "index": 52,
      "question": "Theo tiềm năng gây ra hậu quả, hành vi có thể gây hại cho bản thân và người khác là loại hành vi nào sau đây?",
      "options": [
        {
          "key": "A",
          "text": "Hành vi không an toàn"
        },
        {
          "key": "B",
          "text": "Hành vi có hại"
        },
        {
          "key": "C",
          "text": "Hành vi rủi ro"
        },
        {
          "key": "D",
          "text": "Hành vi nguy cơ"
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "kngt_q_53",
      "index": 53,
      "question": "Theo tiềm năng gây ra hậu quả, hành vi có thể gây hại rất lớn cho bản thân và người khác là loại hành vi nào sau đây?",
      "options": [
        {
          "key": "A",
          "text": "Hành vi không an toàn"
        },
        {
          "key": "B",
          "text": "Hành vi nguy cơ"
        },
        {
          "key": "C",
          "text": "Hành vi rủi ro"
        },
        {
          "key": "D",
          "text": "Hành vi nguy cơ cao"
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "kngt_q_54",
      "index": 54,
      "question": "Với các hành vi sức khỏe là hành vi có lợi, người làm công tác giáo dục sức khỏe nên làm gì?",
      "options": [
        {
          "key": "A",
          "text": "Khuyến khích đối tượng tiếp tục duy trì"
        },
        {
          "key": "B",
          "text": "Ngăn cản, khuyên đối tượng nên bỏ hành vi này"
        },
        {
          "key": "C",
          "text": "Không nhất thiết phải tác động"
        },
        {
          "key": "D",
          "text": "Cấm luôn"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "kngt_q_55",
      "index": 55,
      "question": "Với các hành vi sức khỏe là hành vi trung gian, người làm công tác giáo dục sức khỏe nên làm gì?",
      "options": [
        {
          "key": "A",
          "text": "Khuyến khích đối tượng tiếp tục duy trì"
        },
        {
          "key": "B",
          "text": "Ngăn cản, khuyên đối tượng nên bỏ hành vi này"
        },
        {
          "key": "C",
          "text": "Không nhất thiết phải tác động"
        },
        {
          "key": "D",
          "text": "Cấm luôn"
        }
      ],
      "correctAnswer": "C",
      "explanation": ""
    },
    {
      "id": "kngt_q_56",
      "index": 56,
      "question": "Mô hình này đề xuất cách giáo dục sức khỏe theo các bước: xác định xem hành vi mới mà mình mong muốn đối tượng xây dựng đang ở trong giai đoạn nào của tiến trình thay đổi; sau đó sử dụng chiến lược tương ứng cho giai đoạn đó. Đây là ứng dụng từ mô hình:",
      "options": [
        {
          "key": "A",
          "text": "Niềm tin sức khỏe"
        },
        {
          "key": "B",
          "text": "Nhận thức sức khỏe"
        },
        {
          "key": "C",
          "text": "Các giai đoạn thay đổi"
        },
        {
          "key": "D",
          "text": "Bậc thang hành vi"
        }
      ],
      "correctAnswer": "C",
      "explanation": ""
    },
    {
      "id": "kngt_q_57",
      "index": 57,
      "question": "Bạn A là sinh viên và thường xuyên phải làm bài tập thuyết trình nhóm và sử dụng máy tính hoặc điện thoại rất khuyA. Bạn cũng thường xuyên bị mất ngủ; nhưng hiện tại bạn không cho rằng việc sử dụng thiết bị điện tử nhiều vào buổi tối của mình là nguyên nhân của việc mất ngủ. Theo mô hình Các giai đoạn thay đổi hành vi, đây là giai đoạn nào?",
      "options": [
        {
          "key": "A",
          "text": "Chưa biết/ Chưa quan tâm"
        },
        {
          "key": "B",
          "text": "Sẵn sàng thay đổi"
        },
        {
          "key": "C",
          "text": "Hành động"
        },
        {
          "key": "D",
          "text": "Duy trì"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "kngt_q_58",
      "index": 58,
      "question": "Ở giai đoạn này, đối tượng có thể hoàn toàn không biết về nguy cơ sức khỏe của hành vi, ví dụ đối tượng không cho rằng việc lạm sử dụng điện thoại vào buổi tối khiến cho mình bị mất ngủ. Theo mô hình Các giai đoạn thay đổi hành vi, đây là giai đoạn nào?",
      "options": [
        {
          "key": "A",
          "text": "Chưa biết/ Chưa quan tâm"
        },
        {
          "key": "B",
          "text": "Sẵn sàng thay đổi"
        },
        {
          "key": "C",
          "text": "Hành động"
        },
        {
          "key": "D",
          "text": "Duy trì"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "kngt_q_59",
      "index": 59,
      "question": "Ông X thường xuyên hút thuốc lá. Hiện tại, ông đã có quan tâm đến hành vi có hại này của mình nhưng ông chưa có bất kì kế hoạch gì để thay đổi hành vi. Theo mô hình Các giai đoạn thay đổi hành vi, ông X đang ở giai đoạn:",
      "options": [
        {
          "key": "A",
          "text": "Biết/ Quan tâm"
        },
        {
          "key": "B",
          "text": "Sẵn sàng thay đổi"
        },
        {
          "key": "C",
          "text": "Hành động"
        },
        {
          "key": "D",
          "text": "Duy trì"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "kngt_q_60",
      "index": 60,
      "question": "Ở giai đoạn này, đối tượng có thể đã có kế hoạch thay đổi hành vi trong tương lai gần và có thể đã thực hiện một số bước ban đầu. Theo mô hình Các giai đoạn thay đổi hành vi, đây là giai đoạn nào?",
      "options": [
        {
          "key": "A",
          "text": "Quan tâm"
        },
        {
          "key": "B",
          "text": "Sẵn sàng thay đổi"
        },
        {
          "key": "C",
          "text": "Hành động"
        },
        {
          "key": "D",
          "text": "Duy trì"
        }
      ],
      "correctAnswer": "B",
      "explanation": ""
    },
    {
      "id": "kngt_q_61",
      "index": 61,
      "question": "Hành vi trở thành một phần của đời sống. Theo mô hình Các giai đoạn thay đổi hành vi, đây là giai đoạn:",
      "options": [
        {
          "key": "A",
          "text": "Chưa quan tâm"
        },
        {
          "key": "B",
          "text": "Sẵn sàng thay đổi"
        },
        {
          "key": "C",
          "text": "Hành động"
        },
        {
          "key": "D",
          "text": "Duy trì"
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "kngt_q_62",
      "index": 62,
      "question": "Theo các giai đoạn của quá trình thay đổi hành vi, truyền thông tác động đến nhận thức, cảm xúc để đối tượng NHÌN THẤY được vấn đề là chiến lược của người làm giáo dục sức khỏe khi xác định đối tượng đang ở mức nào sau đây?",
      "options": [
        {
          "key": "A",
          "text": "Chưa quan tâm đến sự thay đổi hành vi"
        },
        {
          "key": "B",
          "text": "Quan tâm đến sự thay đổi hành vi"
        },
        {
          "key": "C",
          "text": "Sẵn sàng thay đổi hành vi"
        },
        {
          "key": "D",
          "text": "Thực hiện hành vi"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "kngt_q_63",
      "index": 63,
      "question": "Theo các giai đoạn của quá trình thay đổi hành vi, truyền thông phân tích lợi và bất lợi của hành vi, giúp đối tượng GIẢI TỎA RÀO CẢN là chiến lược của người làm giáo dục sức khỏe khi xác định đối tượng đang ở mức:",
      "options": [
        {
          "key": "A",
          "text": "Chưa quan tâm đến sự thay đổi hành vi"
        },
        {
          "key": "B",
          "text": "Quan tâm đến sự thay đổi hành vi"
        },
        {
          "key": "C",
          "text": "Sẵn sàng thay đổi hành vi"
        },
        {
          "key": "D",
          "text": "Thực hiện hành vi"
        }
      ],
      "correctAnswer": "B",
      "explanation": ""
    },
    {
      "id": "kngt_q_64",
      "index": 64,
      "question": "Theo các giai đoạn của quá trình thay đổi hành vi, ở giai đoạn này, người làm giáo dục sức khỏe cần hỗ trợ phương tiện, khen thưởng, khích lệ, giúp đối phó với các vấn đề thực tế sao cho đối tượng có thể HÀNH ĐỘNG được. Đây là giai đoạn:",
      "options": [
        {
          "key": "A",
          "text": "Quan tâm đến sự thay đổi hành vi"
        },
        {
          "key": "B",
          "text": "Sẵn sàng thay đổi hành vi"
        },
        {
          "key": "C",
          "text": "Thực hiện hành vi"
        },
        {
          "key": "D",
          "text": "Thụt lùi"
        }
      ],
      "correctAnswer": "C",
      "explanation": ""
    },
    {
      "id": "kngt_q_65",
      "index": 65,
      "question": "Theo các giai đoạn của quá trình thay đổi hành vi, ở giai đoạn này, người làm giáo dục sức khỏe cần tiếp tục hỗ trợ và khích lệ để đối tượng có thể trở thành tấm gương cho người khác và SỐNG CÙNG VỚI HÀNH VI. Đây là giai đoạn:",
      "options": [
        {
          "key": "A",
          "text": "Quan tâm đến sự thay đổi hành vi"
        },
        {
          "key": "B",
          "text": "Sẵn sàng thay đổi hành vi"
        },
        {
          "key": "C",
          "text": "Thực hiện hành vi"
        },
        {
          "key": "D",
          "text": "Duy trì hành vi"
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "kngt_q_66",
      "index": 66,
      "question": "Theo các giai đoạn của quá trình thay đổi hành vi, ở giai đoạn này, người làm giáo dục sức khỏe cần xác định các trở ngại, củng cố các nỗ lực trước đó và phát triển một kế hoạch mới để BẮT ĐẦU LẠI. Đây là giai đoạn:",
      "options": [
        {
          "key": "A",
          "text": "Sẵn sàng thay đổi hành vi"
        },
        {
          "key": "B",
          "text": "Thực hiện hành vi"
        },
        {
          "key": "C",
          "text": "Duy trì hành vi"
        },
        {
          "key": "D",
          "text": "Thụt lùi"
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "kngt_q_67",
      "index": 67,
      "question": "Theo các giai đoạn của quá trình thay đổi hành vi, truyền thông phân tích lợi và bất lợi của hành vi, giúp đối tượng GIẢI TỎA RÀO CẢN là chiến lược của người làm giáo dục sức khỏe khi xác định đối tượng đang ở mức:",
      "options": [
        {
          "key": "A",
          "text": "Chưa quan tâm đến sự thay đổi hành vi"
        },
        {
          "key": "B",
          "text": "Quan tâm đến sự thay đổi hành vi"
        },
        {
          "key": "C",
          "text": "Sẵn sàng thay đổi hành vi"
        },
        {
          "key": "D",
          "text": "Hành động"
        }
      ],
      "correctAnswer": "B",
      "explanation": ""
    },
    {
      "id": "kngt_q_68",
      "index": 68,
      "question": "Nguyên tắc khoa học trong giáo dục sức khỏe bao gồm nhiều nội dung khác nhau, cụ thể:",
      "options": [
        {
          "key": "A",
          "text": "Khoa học y học, khoa học hành vi, tâm lý học, kinh tế học"
        },
        {
          "key": "B",
          "text": "Khoa học y học, tâm lý học, kinh tế học, lý thuyết về sự đổi mới"
        },
        {
          "key": "C",
          "text": "Khoa học y học, khoa học hành vi, tâm lý học, lý thuyết về sự đổi mới"
        },
        {
          "key": "D",
          "text": "Khoa học y học, khoa học giáo dục, tâm lý học, kinh tế học"
        }
      ],
      "correctAnswer": "C",
      "explanation": ""
    },
    {
      "id": "kngt_q_69",
      "index": 69,
      "question": "Cộng đồng nào cũng tồn tại những sự đa dạng về giới tính, độ tuổi, nghề nghiệp, tôn giáo, trình độ học vấn, vấn đề sức khỏe… Do vậy, giáo dục sức khỏe cần hướng đến nhiều người và do nhiều người cùng thực hiện. Đây là nguyên tắc nào trong giáo dục sức khỏe?",
      "options": [
        {
          "key": "A",
          "text": "Nguyên tắc khoa học"
        },
        {
          "key": "B",
          "text": "Nguyên tắc đại chúng"
        },
        {
          "key": "C",
          "text": "Nguyên tắc thực tiễn"
        },
        {
          "key": "D",
          "text": "Nguyên tắc lồng ghép"
        }
      ],
      "correctAnswer": "B",
      "explanation": ""
    },
    {
      "id": "kngt_q_70",
      "index": 70,
      "question": "Nhằm giúp tận dụng tối đa nguồn lực, tránh lãng phí là đặc điểm của nguyên tắc nào trong giáo dục sức khỏe?",
      "options": [
        {
          "key": "A",
          "text": "Nguyên tắc khoa học"
        },
        {
          "key": "B",
          "text": "Nguyên tắc đại chúng"
        },
        {
          "key": "C",
          "text": "Nguyên tắc trực quan"
        },
        {
          "key": "D",
          "text": "Nguyên tắc lồng ghép"
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "kngt_q_71",
      "index": 71,
      "question": "Trong thời gian chờ 30 phút sau tiêm chủng, chúng ta có thể làm giáo dục sức khỏe cho người dân. Đó là nguyên tắc nào sau đây của giáo dục sức khỏe?",
      "options": [
        {
          "key": "A",
          "text": "Nguyên tắc khoa học"
        },
        {
          "key": "B",
          "text": "Nguyên tắc đại chúng"
        },
        {
          "key": "C",
          "text": "Nguyên tắc trực quan"
        },
        {
          "key": "D",
          "text": "Nguyên tắc lồng ghép"
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "kngt_q_72",
      "index": 72,
      "question": "Nội dung giáo dục sức khỏe phải xuất phát từ cộng đồng và giải quyết các vấn đề của cộng đồng. Đó là nguyên tắc giáo dục sức khỏe nào sau đây?",
      "options": [
        {
          "key": "A",
          "text": "Nguyên tắc khoa học"
        },
        {
          "key": "B",
          "text": "Nguyên tắc đại chúng"
        },
        {
          "key": "C",
          "text": "Nguyên tắc thực tiễn"
        },
        {
          "key": "D",
          "text": "Nguyên tắc lồng ghép"
        }
      ],
      "correctAnswer": "C",
      "explanation": ""
    },
    {
      "id": "kngt_q_73",
      "index": 73,
      "question": "Ưu tiên sử dụng những gì sinh động, tác động trực tiếp vào các giác quan của con người là nguyên tắc nào sau đây của giáo dục sức khỏe?",
      "options": [
        {
          "key": "A",
          "text": "Nguyên tắc khoa học"
        },
        {
          "key": "B",
          "text": "Nguyên tắc trực quan"
        },
        {
          "key": "C",
          "text": "Nguyên tắc thực tiễn"
        },
        {
          "key": "D",
          "text": "Nguyên tắc lồng ghép"
        }
      ],
      "correctAnswer": "B",
      "explanation": ""
    },
    {
      "id": "kngt_q_74",
      "index": 74,
      "question": "Thực hiện một số thí nghiệm đơn giản ngay tại buổi nói chuyện sức khỏe để người dân có thể hình dung rõ hơn về tác hại của việc hút thuốc lá đối với sức khỏe. Đây là ứng dụng của nguyên tắc:",
      "options": [
        {
          "key": "A",
          "text": "Nguyên tắc khoa học"
        },
        {
          "key": "B",
          "text": "Nguyên tắc trực quan"
        },
        {
          "key": "C",
          "text": "Nguyên tắc thực tiễn"
        },
        {
          "key": "D",
          "text": "Nguyên tắc lồng ghép"
        }
      ],
      "correctAnswer": "B",
      "explanation": ""
    },
    {
      "id": "kngt_q_75",
      "index": 75,
      "question": "Sử dụng các hình ảnh minh họa sống động trong lúc giáo dục sức khỏe là ứng dụng của nguyên tắc nào sau đây?",
      "options": [
        {
          "key": "A",
          "text": "Nguyên tắc khoa học"
        },
        {
          "key": "B",
          "text": "Nguyên tắc trực quan"
        },
        {
          "key": "C",
          "text": "Nguyên tắc thực tiễn"
        },
        {
          "key": "D",
          "text": "Nguyên tắc lồng ghép"
        }
      ],
      "correctAnswer": "B",
      "explanation": ""
    },
    {
      "id": "kngt_q_76",
      "index": 76,
      "question": "Áp dụng những hiểu biết về tâm lý học khi thực hiện hoạt động giáo dục sức khỏe là đang là ứng dụng nguyên tắc nào sau đây?",
      "options": [
        {
          "key": "A",
          "text": "Nguyên tắc khoa học"
        },
        {
          "key": "B",
          "text": "Nguyên tắc trực quan"
        },
        {
          "key": "C",
          "text": "Nguyên tắc thực tiễn"
        },
        {
          "key": "D",
          "text": "Nguyên tắc lồng ghép"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "kngt_q_77",
      "index": 77,
      "question": "Áp dụng những hiểu biết về tháp nhu cầu của Maslow khi thực hiện hoạt động giáo dục sức khỏe là đang là ứng dụng nguyên tắc nào sau đây?",
      "options": [
        {
          "key": "A",
          "text": "Nguyên tắc khoa học"
        },
        {
          "key": "B",
          "text": "Nguyên tắc trực quan"
        },
        {
          "key": "C",
          "text": "Nguyên tắc thực tiễn"
        },
        {
          "key": "D",
          "text": "Nguyên tắc lồng ghép"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "kngt_q_78",
      "index": 78,
      "question": "Áp dụng những hiểu biết về khoa học hành vi khi thực hiện hoạt động giáo dục sức khỏe là đang là ứng dụng nguyên tắc nào sau đây?",
      "options": [
        {
          "key": "A",
          "text": "Nguyên tắc khoa học"
        },
        {
          "key": "B",
          "text": "Nguyên tắc trực quan"
        },
        {
          "key": "C",
          "text": "Nguyên tắc thực tiễn"
        },
        {
          "key": "D",
          "text": "Nguyên tắc lồng ghép"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "kngt_q_79",
      "index": 79,
      "question": "Áp dụng những hiểu biết về y học khi thực hiện hoạt động giáo dục sức khỏe là đang là ứng dụng nguyên tắc nào sau đây?",
      "options": [
        {
          "key": "A",
          "text": "Nguyên tắc khoa học"
        },
        {
          "key": "B",
          "text": "Nguyên tắc trực quan"
        },
        {
          "key": "C",
          "text": "Nguyên tắc thực tiễn"
        },
        {
          "key": "D",
          "text": "Nguyên tắc lồng ghép"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "kngt_q_80",
      "index": 80,
      "question": "Một bà lang có bài thuốc cai đẻ bằng lá rừng để rải lên giường ngủ của 2 vợ chồng, một cán bộ trạm y tế tiếp thu bài thuốc và phổ biến cho nhân dân. Người này đã vi phạm nguyên tắc truyền thông giáo dục sức khỏe nào sau đây?",
      "options": [
        {
          "key": "A",
          "text": "Nguyên tắc khoa học"
        },
        {
          "key": "B",
          "text": "Nguyên tắc đại chúng"
        },
        {
          "key": "C",
          "text": "Nguyên tắc trực quan"
        },
        {
          "key": "D",
          "text": "Nguyên tắc thực tiễn"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "kngt_q_81",
      "index": 81,
      "question": "Trong giáo dục sức khỏe, kiến thức nào cần thiết giúp cho người làm giáo dục sức khỏe chọn đúng thông tin để cung cấp cho đối tượng:",
      "options": [
        {
          "key": "A",
          "text": "Tâm lý học"
        },
        {
          "key": "B",
          "text": "Khoa học hành vi"
        },
        {
          "key": "C",
          "text": "Y học"
        },
        {
          "key": "D",
          "text": "Giáo dục học"
        }
      ],
      "correctAnswer": "C",
      "explanation": ""
    },
    {
      "id": "kngt_q_82",
      "index": 82,
      "question": "Các thành phần quan trọng của tiến trình truyền thông giúp phân loại phương pháp giáo dục sức khỏe là:",
      "options": [
        {
          "key": "A",
          "text": "Đặc điểm người gởi và người nhận"
        },
        {
          "key": "B",
          "text": "Đặc điểm người gởi và tính chất phản hồi"
        },
        {
          "key": "C",
          "text": "Đặc điểm kênh truyền thông và tính chất người nhận"
        },
        {
          "key": "D",
          "text": "Đặc điểm người nhận và tính chất phản hồi"
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "kngt_q_83",
      "index": 83,
      "question": "GDSK được chia thành 2 phương pháp là GDSK trực tiếp hoặc gián tiếp. Đây là cách phân loại dựa vào:",
      "options": [
        {
          "key": "A",
          "text": "Tính chất của kênh thông tin"
        },
        {
          "key": "B",
          "text": "Tính chất của phản hồi"
        },
        {
          "key": "C",
          "text": "Quy mô của người nhận"
        },
        {
          "key": "D",
          "text": "Quy mô tác động"
        }
      ],
      "correctAnswer": "B",
      "explanation": ""
    },
    {
      "id": "kngt_q_84",
      "index": 84,
      "question": "Chuyển tải thông tin theo cách mặt đối mặt là phương pháp truyền thông:",
      "options": [
        {
          "key": "A",
          "text": "Trực tiếp"
        },
        {
          "key": "B",
          "text": "Gián tiếp"
        },
        {
          "key": "C",
          "text": "Phức tạp nhất"
        },
        {
          "key": "D",
          "text": "Đơn giản nhất"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "kngt_q_85",
      "index": 85,
      "question": "Đâu là phương pháp truyền thông trực tiếp?",
      "options": [
        {
          "key": "A",
          "text": "Phát thanh"
        },
        {
          "key": "B",
          "text": "Truyền hình"
        },
        {
          "key": "C",
          "text": "Thăm hộ gia đình"
        },
        {
          "key": "D",
          "text": "Internet"
        }
      ],
      "correctAnswer": "C",
      "explanation": ""
    },
    {
      "id": "kngt_q_86",
      "index": 86,
      "question": "Đâu là phương pháp truyền thông gián tiếp?",
      "options": [
        {
          "key": "A",
          "text": "GDSK cá nhân"
        },
        {
          "key": "B",
          "text": "Thăm hộ gia đình"
        },
        {
          "key": "C",
          "text": "Nói chuyện sức khỏe"
        },
        {
          "key": "D",
          "text": "Báo, tạp chí"
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "kngt_q_87",
      "index": 87,
      "question": "GDSK được chia thành 3 phương pháp là GDSK đại chúng, nhóm hoặc cá nhân. Đây là cách phân loại dựa vào:",
      "options": [
        {
          "key": "A",
          "text": "Tính chất của kênh thông tin"
        },
        {
          "key": "B",
          "text": "Tính chất của phản hồi"
        },
        {
          "key": "C",
          "text": "Quy mô của người nhận"
        },
        {
          "key": "D",
          "text": "Quy mô tác động"
        }
      ],
      "correctAnswer": "C",
      "explanation": ""
    },
    {
      "id": "kngt_q_88",
      "index": 88,
      "question": "Hình thức truyền thông nào nào sau đây KHÔNG phải là truyền thông đại chúng?",
      "options": [
        {
          "key": "A",
          "text": "Băng rôn trên đường phố"
        },
        {
          "key": "B",
          "text": "Truyền hình"
        },
        {
          "key": "C",
          "text": "Phát thanh"
        },
        {
          "key": "D",
          "text": "Bảng thông tin sức khỏe trong khoa phòng của bệnh viện"
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "kngt_q_89",
      "index": 89,
      "question": "Tác động đến nhiều người một cách ẩn danh và không đồng nhất là đặc điểm của phương pháp GDSK nào sau đây?",
      "options": [
        {
          "key": "A",
          "text": "GDSK đại chúng"
        },
        {
          "key": "B",
          "text": "GDSK nhóm lớn"
        },
        {
          "key": "C",
          "text": "GDSK nhóm nhỏ"
        },
        {
          "key": "D",
          "text": "GDSK cá nhân"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "kngt_q_90",
      "index": 90,
      "question": "Dù thiếu tính tương tác nhưng tiếp cận được với số đông trong thời gian ngắn, đó là đặc điểm của phương pháp GDSK nào sau đây?",
      "options": [
        {
          "key": "A",
          "text": "GDSK nhóm nhỏ, gián tiếp"
        },
        {
          "key": "B",
          "text": "GDSK cá nhân, gián tiếp"
        },
        {
          "key": "C",
          "text": "GDSK đại chúng, gián tiếp"
        },
        {
          "key": "D",
          "text": "GDSK đại chúng, trực tiếp"
        }
      ],
      "correctAnswer": "C",
      "explanation": ""
    },
    {
      "id": "kngt_q_91",
      "index": 91,
      "question": "Có tính tương tác cao và thể đảm bảo được tốt nhất về việc đối tượng sẽ hiểu đúng thông tin là đặc điểm của phương pháp GDSK nào sau đây?",
      "options": [
        {
          "key": "A",
          "text": "GDSK nhóm nhỏ, gián tiếp"
        },
        {
          "key": "B",
          "text": "GDSK nhóm nhỏ, trực tiếp"
        },
        {
          "key": "C",
          "text": "GDSK cá nhân, gián tiếp"
        },
        {
          "key": "D",
          "text": "GDSK cá nhân, trực tiếp"
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "kngt_q_92",
      "index": 92,
      "question": "Chọn câu ĐÚNG NHẤT. Hình thức trao đổi thông tin nào sau đây là truyền thông trực tiếp?",
      "options": [
        {
          "key": "A",
          "text": "Nam gửi mail cho Tuấn"
        },
        {
          "key": "B",
          "text": "Nam gọi điện thoại cho Tuấn"
        },
        {
          "key": "C",
          "text": "Nam đang nói chuyện với nhau với Tuấn qua facebook"
        },
        {
          "key": "D",
          "text": "Nam nhắn tin hỏi Tuấn về bài tập"
        }
      ],
      "correctAnswer": "C",
      "explanation": ""
    },
    {
      "id": "kngt_q_93",
      "index": 93,
      "question": "“Trong một chiến dịch giáo dục sức khỏe, truyền thông … thường được sử dụng đầu tiên để gây chú ý và tạo sự quan tâm; sau đó là truyền thông … nhằm tác động vào một số đối tượng chuyên biệt; song song đó là truyền thông … như phòng tư vấn hay đường dây nóng.” Các từ thích hợp để lần lượt điền vào chỗ trống bên\ntrên là:",
      "options": [
        {
          "key": "A",
          "text": "Cá nhân, nhóm, đại chúng"
        },
        {
          "key": "B",
          "text": "Nhóm, đại chúng, cá nhân"
        },
        {
          "key": "C",
          "text": "Đại chúng, nhóm, cá nhân"
        },
        {
          "key": "D",
          "text": "Đại chúng, cá nhân, nhóm"
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "kngt_q_94",
      "index": 94,
      "question": "Nhận định nào sau về các phương pháp giáo dục sức khỏe là ĐÚNG?",
      "options": [
        {
          "key": "A",
          "text": "Đa phần truyền thông đại chúng là trực tiếp"
        },
        {
          "key": "B",
          "text": "Đa phần truyền thông nhóm là gián tiếp"
        },
        {
          "key": "C",
          "text": "Chỉ có những nước kém phát triển mới tập trung nhiều vào truyền thông đại chúng"
        },
        {
          "key": "D",
          "text": "Truyền thông đại chúng có thể có trực tiếp và gián tiếp"
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "kngt_q_95",
      "index": 95,
      "question": "Đặc điểm nào của truyền thông gián tiếp?",
      "options": [
        {
          "key": "A",
          "text": "Thường chậm, giới hạn về đối tượng"
        },
        {
          "key": "B",
          "text": "Nhận phản hồi trực tiếp từ đối tượng"
        },
        {
          "key": "C",
          "text": "Thay đổi thái độ, hành vi, kỹ năng giải quyết vấn đề"
        },
        {
          "key": "D",
          "text": "Thường cung cấp thông tin một chiều"
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "kngt_q_96",
      "index": 96,
      "question": "Hầu như một chiều, rất khó thu nhận hồi báo do đó có khả năng gây hiểu lầm. Đây là khuyết điểm của phương pháp giáo dục sức khỏe nào sau đây? Chọn ĐÚNG NHẤT.",
      "options": [
        {
          "key": "A",
          "text": "Đại chúng"
        },
        {
          "key": "B",
          "text": "Nhóm"
        },
        {
          "key": "C",
          "text": "Trực tiếp"
        },
        {
          "key": "D",
          "text": "Gián tiếp"
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "kngt_q_97",
      "index": 97,
      "question": "Mỗi sáng, chú Tư chạy xe ôm đều dùng điện thoại của mình để lên mạng đọc báo. Chú thường đọc tin ở Báo Thanh Niên, Báo Tuổi trẻ, Báo Sài Gòn giải phóng. Những kênh truyền thông trên là:",
      "options": [
        {
          "key": "A",
          "text": "Truyền thông nhóm lớn, vì mỗi tờ báo hướng tới một nhóm đối tượng chuyên biệt"
        },
        {
          "key": "B",
          "text": "Vì ai cũng có thể mua báo nên đây là truyền thông đại chúng, kênh báo chí"
        },
        {
          "key": "C",
          "text": "Vì ai cũng có thể mua báo nên đây là truyền thông đại chúng, kênh internet có kiểm soát"
        },
        {
          "key": "D",
          "text": "Vì ai cũng có thể mua báo nên đây là truyền thông đại chúng, kênh internet không kiểm soát"
        }
      ],
      "correctAnswer": "C",
      "explanation": ""
    },
    {
      "id": "kngt_q_98",
      "index": 98,
      "question": "Chọn câu ĐÚNG NHẤT. Tạp chí “Phụ nữ ngày nay” là:",
      "options": [
        {
          "key": "A",
          "text": "Kênh truyền thông đại chúng, vì hầu như ai cũng có thể mua tạp chí"
        },
        {
          "key": "B",
          "text": "Kênh truyền thông đại chúng, nhưng giới hạn đối tượng khách hàng chỉ là phụ nữ"
        },
        {
          "key": "C",
          "text": "Kênh truyền thông nhóm, vì nội dung dành riêng cho phụ nữ"
        },
        {
          "key": "D",
          "text": "Kênh truyền thông nhóm, vì nội dung dành riêng cho phụ nữ trong cuộc sống hiện đại"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "kngt_q_99",
      "index": 99,
      "question": "Hình thức truyền thông nào sau đây KHÔNG phải là truyền thông đại chúng?",
      "options": [
        {
          "key": "A",
          "text": "Băng rôn trên đường phố"
        },
        {
          "key": "B",
          "text": "Truyền hình"
        },
        {
          "key": "C",
          "text": "Phát thanh"
        },
        {
          "key": "D",
          "text": "Bảng thông tin trong khoa phòng của bệnh viện"
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "kngt_q_100",
      "index": 100,
      "question": "Các hình thức sau đều là giáo dục sức khỏe nhóm trực tiếp, NGOẠI TRỪ:",
      "options": [
        {
          "key": "A",
          "text": "Thảo luận nhóm"
        },
        {
          "key": "B",
          "text": "Diễn đàn trên mạng xã hội"
        },
        {
          "key": "C",
          "text": "Sắm vai"
        },
        {
          "key": "D",
          "text": "Văn nghệ"
        }
      ],
      "correctAnswer": "B",
      "explanation": ""
    },
    {
      "id": "kngt_q_101",
      "index": 101,
      "question": "Người dân ở xã X, huyện Y tiếp cận được thông tin về tình hình bệnh sốt xuất huyết hiện tại thông qua các bài phát thanh từ loa phát tha  cvnh của xã vào mỗi buổi chiều. Đây là kênh hình thức giáo dục sức khỏe nào sau đây?",
      "options": [
        {
          "key": "A",
          "text": "GDSK nhóm, gián tiếp"
        },
        {
          "key": "B",
          "text": "GDSK nhóm, trực tiếp"
        },
        {
          "key": "C",
          "text": "GDSK đại chúng, gián tiếp"
        },
        {
          "key": "D",
          "text": "GDSK đại chúng, trực tiếp"
        }
      ],
      "correctAnswer": "C",
      "explanation": ""
    },
    {
      "id": "kngt_q_102",
      "index": 102,
      "question": "Nói về cách phân loại phương tiện GDSK, cách nào sau đây là chính xác?",
      "options": [
        {
          "key": "A",
          "text": "Phương tiện hiện đại và cổ điển"
        },
        {
          "key": "B",
          "text": "Phương tiện trực tiếp và gián tiếp"
        },
        {
          "key": "C",
          "text": "Phương tiện truyền tin và mang tin"
        },
        {
          "key": "D",
          "text": "Phương tiện nghe nhìn và trực quan"
        }
      ],
      "correctAnswer": "C",
      "explanation": ""
    },
    {
      "id": "kngt_q_103",
      "index": 103,
      "question": "Trong phân loại của phương tiện GDSK, đâu là phương tiện truyền tin (truyền tải thông tin)?",
      "options": [
        {
          "key": "A",
          "text": "Tờ rơi về sức khỏe"
        },
        {
          "key": "B",
          "text": "Tranh tường về sức khỏe"
        },
        {
          "key": "C",
          "text": "Video clip về sức khỏe"
        },
        {
          "key": "D",
          "text": "Máy phát thanh"
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "kngt_q_104",
      "index": 104,
      "question": "Trong phân loại của phương tiện GDSK, đâu là phương tiện truyền tin (truyền tải thông tin)?",
      "options": [
        {
          "key": "A",
          "text": "Sách về sức khỏe"
        },
        {
          "key": "B",
          "text": "Tranh lật về sức khỏe"
        },
        {
          "key": "C",
          "text": "Biểu đồ tháp dinh dưỡng"
        },
        {
          "key": "D",
          "text": "Máy vi tính"
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "kngt_q_105",
      "index": 105,
      "question": "Trong phân loại của phương tiện GDSK, đâu là phương tiện mang tin (chứa đựng thông tin)?",
      "options": [
        {
          "key": "A",
          "text": "Sách về sức khỏe"
        },
        {
          "key": "B",
          "text": "Máy phát thanh"
        },
        {
          "key": "C",
          "text": "Máy vi tính"
        },
        {
          "key": "D",
          "text": "Ti vi"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "kngt_q_106",
      "index": 106,
      "question": "Các yếu tố sau đây là quan trọng và cần cân nhắc để lựa chọn phương pháp và phương tiện giáo dục sức khỏe cho phù hợp, NGOẠI TRỪ. :",
      "options": [
        {
          "key": "A",
          "text": "Bản chất vấn đề sức khỏe"
        },
        {
          "key": "B",
          "text": "Ý kiến chỉ đạo của cấp trên"
        },
        {
          "key": "C",
          "text": "Đặc điểm của đối tượng tiếp nhận"
        },
        {
          "key": "D",
          "text": "Nguồn lực đang có, bao gồm nhân lực, tài lực và vật lực"
        }
      ],
      "correctAnswer": "B",
      "explanation": ""
    },
    {
      "id": "kngt_q_107",
      "index": 107,
      "question": "Trong các yếu tố cần cân nhắc để lựa chọn phương pháp và phương tiện giáo dục sức khỏe cho phù hợp, yếu tố “tính chất của vấn đề sức khỏe” bao gồm:",
      "options": [
        {
          "key": "A",
          "text": "Tính khẩn cấp và tính phổ biến của vấn đề"
        },
        {
          "key": "B",
          "text": "Tính khẩn cấp và tính nhạy cảm của vấn đề"
        },
        {
          "key": "C",
          "text": "Tính trầm trọng và tính phổ biến của vấn đề"
        },
        {
          "key": "D",
          "text": "Tính trầm trọng và tính nhạy cảm của vấn đề"
        }
      ],
      "correctAnswer": "B",
      "explanation": ""
    },
    {
      "id": "kngt_q_108",
      "index": 108,
      "question": "Vì nhân lực cho hoạt động giáo dục sức khỏe có hạn, ở huyện X, Trạm Y tế quyết định thực hiện treo băng rôn kết hợp với phát tài liệu truyền thông (tờ rơi) về tổ dân phố thay vì tổ chức buổi nói chuyện sức khỏe. Lựa chọn phương pháp và phương tiện truyền thông này đang được thực hiện dựa trên yếu tố:",
      "options": [
        {
          "key": "A",
          "text": "Bản chất vấn đề sức khỏe"
        },
        {
          "key": "B",
          "text": "Ý kiến chỉ đạo của cấp trên"
        },
        {
          "key": "C",
          "text": "Đặc điểm của đối tượng tiếp nhận"
        },
        {
          "key": "D",
          "text": "Nguồn lực đang có"
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "kngt_q_109",
      "index": 109,
      "question": "Truyền thông giáo dục sức khỏe sẽ đạt được hiệu quả cao hơn khi ta:",
      "options": [
        {
          "key": "A",
          "text": "Dùng một phương pháp GDSK"
        },
        {
          "key": "B",
          "text": "Kết hợp nhiều phương pháp khác nhau"
        },
        {
          "key": "C",
          "text": "Dùng một phương tiện truyền thông"
        },
        {
          "key": "D",
          "text": "Kết hợp nhiều phương tiện truyền thông"
        }
      ],
      "correctAnswer": "B",
      "explanation": ""
    },
    {
      "id": "kngt_q_110",
      "index": 110,
      "question": "Người làm giáo dục sức khỏe cần các kỹ năng sau, NGOẠI TRỪ. ?",
      "options": [
        {
          "key": "A",
          "text": "Giao tiếp"
        },
        {
          "key": "B",
          "text": "Truyền thông"
        },
        {
          "key": "C",
          "text": "Tuyên truyền"
        },
        {
          "key": "D",
          "text": "Khơi dậy"
        }
      ],
      "correctAnswer": "C",
      "explanation": ""
    },
    {
      "id": "kngt_q_111",
      "index": 111,
      "question": "Để người dân hiểu được cơ chế hoạt động của tim, giáo dục viên quyết định so sánh hình ảnh trái tim như là cái máy bơm, còn việc tim bơm máu đi nuôi cơ thể giống như máy bơm đang bơm nước để tưới ruộng đồng. Người này đang sử dụng kỹ năng gì trong giáo dục sức khỏe?",
      "options": [
        {
          "key": "A",
          "text": "Giao tiếp"
        },
        {
          "key": "B",
          "text": "Truyền thông"
        },
        {
          "key": "C",
          "text": "Tuyên truyền"
        },
        {
          "key": "D",
          "text": "Khơi dậy"
        }
      ],
      "correctAnswer": "B",
      "explanation": ""
    },
    {
      "id": "kngt_q_112",
      "index": 112,
      "question": "Tạo được thiện cảm, giúp người dân “chịu nghe” buổi nói chuyện giáo dục sức khỏe là kỹ năng:",
      "options": [
        {
          "key": "A",
          "text": "Giao tiếp, vì tác động được vào cảm xúc của đối tượng"
        },
        {
          "key": "B",
          "text": "Giao tiếp, vì tác động được vào nhận thức của đối tượng"
        },
        {
          "key": "C",
          "text": "Truyền thông, vì tác động được vào cảm xúc của đối tượng"
        },
        {
          "key": "D",
          "text": "Truyền thông, vì tác động được vào nhận thức của đối tượng"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "kngt_q_113",
      "index": 113,
      "question": "Tác động vào nhận thức, giúp người dân “chịu hiểu” những gì giáo dục viên chia sẻ là kỹ năng giáo dục sức khỏe nào sau đây?",
      "options": [
        {
          "key": "A",
          "text": "Giao tiếp"
        },
        {
          "key": "B",
          "text": "Truyền thông"
        },
        {
          "key": "C",
          "text": "Tuyên truyền"
        },
        {
          "key": "D",
          "text": "Khơi dậy"
        }
      ],
      "correctAnswer": "B",
      "explanation": ""
    },
    {
      "id": "kngt_q_114",
      "index": 114,
      "question": "Biết đặt mình vào hoàn cảnh của đối tượng là đức tính gì của người làm GDSK?",
      "options": [
        {
          "key": "A",
          "text": "Thấu cảm"
        },
        {
          "key": "B",
          "text": "Chấp nhận"
        },
        {
          "key": "C",
          "text": "Chân thành"
        },
        {
          "key": "D",
          "text": "Bao dung"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "kngt_q_115",
      "index": 115,
      "question": "Khi giao tiếp, người làm giáo dục sức khỏe nên:",
      "options": [
        {
          "key": "A",
          "text": "Luôn giữ nét mặt nghiêm nghị"
        },
        {
          "key": "B",
          "text": "Luôn sử dụng tay để diễn tả"
        },
        {
          "key": "C",
          "text": "Có cách nhìn bao quát, không nhìn quá lâu một nơi"
        },
        {
          "key": "D",
          "text": "Vuốt tóc, sửa quần áo để tỏ ra lịch sự"
        }
      ],
      "correctAnswer": "C",
      "explanation": ""
    },
    {
      "id": "kngt_q_116",
      "index": 116,
      "question": "Để dễ hiểu, trong lúc giải thích với người bệnh, bác sĩ so sánh một bộ phận của cơ thể với một vật dụng quen thuộc trong cuộc sống. Đây là cách làm của kỹ năng nào trong giáo dục sức khỏe?",
      "options": [
        {
          "key": "A",
          "text": "Kỹ năng tuyên truyền"
        },
        {
          "key": "B",
          "text": "Kỹ năng truyền thông"
        },
        {
          "key": "C",
          "text": "Kỹ năng giao tiếp"
        },
        {
          "key": "D",
          "text": "Kỹ năng khơi dậy"
        }
      ],
      "correctAnswer": "B",
      "explanation": ""
    },
    {
      "id": "kngt_q_117",
      "index": 117,
      "question": "Khi thực hiện quá trình GDSK, nhất là GDSK trực tiếp, giáo dục viên có thể tăng sử dụng ngôn ngữ hình thể bằng các cách sau đây, NGOẠI TRỪ.:",
      "options": [
        {
          "key": "A",
          "text": "Tương tác ánh mắt"
        },
        {
          "key": "B",
          "text": "Điều chỉnh âm lượng giọng nói cho phù hợp"
        },
        {
          "key": "C",
          "text": "Có biểu cảm gương mặt phù hợp"
        },
        {
          "key": "D",
          "text": "Chọn lọc từ ngữ diễn đạt phù hợp"
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "kngt_q_118",
      "index": 118,
      "question": "Trong một buổi giáo dục sức khỏe, giáo dục viên có nói như sau: “Theo khuyến cáo của Tổ chức Y tế thế giới, mỗi người nên tập thể dục 150 phút/ tuần, tức là khoảng 30 phút mỗi ngày và không nghỉ quá 2 ngày liên tục”. Câu nói trên đang áp dụng kỹ năng nào trong giáo dục sức khỏe khi nhắc đến Tổ chức Y tế thế giới?",
      "options": [
        {
          "key": "A",
          "text": "Kỹ năng giao tiếp, tạo thiện cảm vì nhắc đến Tổ chức Y tế thế giới, là một tổ chức uy tín về sức khỏe"
        },
        {
          "key": "B",
          "text": "Kỹ năng truyền thông, làm cho vấn đề trở nên dễ hiểu hơn, để người dân có thể dễ thực hiện"
        },
        {
          "key": "C",
          "text": "Kỹ năng khơi dậy, nêu ra được nguồn thông tin uy tín"
        },
        {
          "key": "D",
          "text": "Kỹ năng phân tích, giúp làm rõ vấn đề"
        }
      ],
      "correctAnswer": "C",
      "explanation": ""
    },
    {
      "id": "kngt_q_119",
      "index": 119,
      "question": "Trong một buổi giáo dục sức khỏe, giáo dục viên có nói như sau: “Theo khuyến cáo của Tổ chức Y tế thế giới, mỗi người nên tập thể dục 150 phút/ tuần, tức là khoảng 30 phút mỗi ngày và không nghỉ quá 2 ngày liên tục”. Câu nói trên đang áp dụng kỹ năng nào trong giáo dục sức khỏe khi diễn giải 150 phút/tuần thành khoảng 30 phút mỗi ngày?",
      "options": [
        {
          "key": "A",
          "text": "Kỹ năng giao tiếp, tạo thiện cảm vì nhắc đến Tổ chức Y tế thế giới, là một tổ chức uy tín về sức khỏe"
        },
        {
          "key": "B",
          "text": "Kỹ năng truyền thông, làm cho vấn đề trở nên dễ hiểu hơn, để người dân có thể dễ thực hiện"
        },
        {
          "key": "C",
          "text": "Kỹ năng khơi dậy, nêu ra được nguồn thông tin uy tín"
        },
        {
          "key": "D",
          "text": "Kỹ năng phân tích, giúp làm rõ vấn đề"
        }
      ],
      "correctAnswer": "B",
      "explanation": ""
    },
    {
      "id": "kngt_q_120",
      "index": 120,
      "question": "Trong một buổi giáo dục sức khỏe, trước khi kết thúc bài nói chuyện của mình, giáo dục viên cung cấp cho đối tượng thông tin của một số cơ sở khám chữa bệnh uy tín trong khu vực. Giáo dục viên này đang áp dụng kỹ năng giáo dục sức khỏe nào?",
      "options": [
        {
          "key": "A",
          "text": "Kỹ năng giao tiếp, tạo được thiện cảm nơi đối tượng vì thể hiện được sự quan tâm một cách dài hạn chứ không nhất thời"
        },
        {
          "key": "B",
          "text": "Kỹ năng truyền thông, giúp đối tượng làm rõ vấn đề đâu là cơ sở đáng tin cậy"
        },
        {
          "key": "C",
          "text": "Kỹ năng khơi dậy, giúp đối tượng yên tâm hơn khi cần giúp đỡ"
        },
        {
          "key": "D",
          "text": "Kỹ năng phân tích, giúp đối tượng nhìn rõ môi trường sống của mình hơn"
        }
      ],
      "correctAnswer": "C",
      "explanation": ""
    },
    {
      "id": "kngt_q_121",
      "index": 121,
      "question": "Chọn câu SAI. Trong giáo dục sức khỏe, câu nói nào sau đâu thể hiện được sự áp dụng kỹ thuật “tác động của tấm danh thiếp”?",
      "options": [
        {
          "key": "A",
          "text": "“Bác Hồ - vị lãnh tụ vĩ đại của dân tộc ta sinh thời luôn quan tâm đến sự phát triển của thiếu nhi, điều đó cho thấy tầm quan trọng của việc cần phải quan tâm chăm lo cho trẻ nhỏ - những mầm non tương lai của đất nước”"
        },
        {
          "key": "B",
          "text": "“Bộ Y tế Việt Nam khuyến khích người dân ăn chín, uống sôi để …”"
        },
        {
          "key": "C",
          "text": "“Ông bà ta có câu Đói ăn rau, đau uống thuốc,.. .  ”"
        },
        {
          "key": "D",
          "text": "“Như các anh chị cũng biết, suy dinh dưỡng ảnh hưởng rất nhiều đến sự phát triển của trẻ. Do vậy,…”"
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "kngt_q_122",
      "index": 122,
      "question": "Để người dân hiểu được vai trò của việc tiêm vaccine trong phòng ngừa bệnh tật, giáo dục viên quyết định so sánh hình ảnh việc tiêm vaccine khi cơ thể còn đang khỏe mạnh giống như việc tập trận giữa thời bình, để đến khi có chiến tranh (mầm bệnh xâm nhập vào cơ thể) thì sự ứng phó (sự phản ứng từ hệ miễn dịch của cơ thể) đã được quen việc. Khi đó, sự chống chọi của cơ thể với bệnh tật sẽ tốt hơn do đã “biết cách đánh trận” từ trước. Việc làm này thể hiện kỹ năng gì ở giáo dục viên?",
      "options": [
        {
          "key": "A",
          "text": "Giao tiếp"
        },
        {
          "key": "B",
          "text": "Truyền thông"
        },
        {
          "key": "C",
          "text": "Tuyên truyền"
        },
        {
          "key": "D",
          "text": "Khơi dậy"
        }
      ],
      "correctAnswer": "B",
      "explanation": ""
    },
    {
      "id": "kngt_q_123",
      "index": 123,
      "question": "Việc làm nào sau đây có thể giúp đối tượng tăng cường sự tự tin, năng lực tự chọn lựa, tự quyết định tiến đến thực hiện các hành vi sức khỏe phù hợp?",
      "options": [
        {
          "key": "A",
          "text": "Sử dụng kỹ thuật khai thác sự tương tự (analogy) để giải thích vấn đề một cách thật dễ hiểu với người dân"
        },
        {
          "key": "B",
          "text": "Thiết kế thông điệp sao cho ngắn gọn, rõ ràng, dể hiểu"
        },
        {
          "key": "C",
          "text": "Thể hiện sự lắng nghe và tôn trọng khi nói chuyện với đối tượng"
        },
        {
          "key": "D",
          "text": "Hạn chế áp đặt ý kiến của giáo dục viên; cần khơi gợi giúp đối tượng tự phát hiện ra vấn đề"
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "kngt_q_124",
      "index": 124,
      "question": "Việc làm nào sau đây có thể giúp đối tượng tăng cường sự tự tin, năng lực tự chọn lựa, tự quyết định tiến đến thực hiện các hành vi sức khỏe phù hợp?",
      "options": [
        {
          "key": "A",
          "text": "Nêu những gương điển hình (được đối tượng yêu thích) đã thực hiện hành vi tại địa phương"
        },
        {
          "key": "B",
          "text": "Giáo dục viên ăn mặc lịch sự, thể hiện sự hòa đồng, tôn trọng đối tượng"
        },
        {
          "key": "C",
          "text": "Sử dụng qui tắc “người của mình” để mau chóng thiết lập một mối quan hệ tốt với đối tượng"
        },
        {
          "key": "D",
          "text": "Hạn chế càng nhiều càng tốt những yếu tố có thể làm nhiễu quá trình truyền thông"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "kngt_q_125",
      "index": 125,
      "question": "Việc làm nào sau đây có thể giúp giáo dục viên thiết lập được một mối quan hệ tốt với đối tượng, tạo tiền đề cho những hoạt động giáo dục sức khỏe sau đó dễ đạt được hiệu quả hơn, NGOẠI TRỪ. ?",
      "options": [
        {
          "key": "A",
          "text": "Cố gắng đặt mình vào hoàn cảnh của đối tượng để hiểu đối tượng"
        },
        {
          "key": "B",
          "text": "Chọn một vị trí đứng hoặc ngồi phù hợp, càng ít vật cản giữa mình và người tham dự càng tốt"
        },
        {
          "key": "C",
          "text": "Sử dụng các công cụ minh họa để tăng tính trực quan cho bài nói chuyện"
        },
        {
          "key": "D",
          "text": "Cố gắng tìm điểm chung giữa mình với đối tượng để tạo sự gần gũi"
        }
      ],
      "correctAnswer": "C",
      "explanation": ""
    },
    {
      "id": "kngt_q_126",
      "index": 126,
      "question": "Trong các yếu tố sau, yếu tố quan trọng nhất để cân nhắc khi chọn thời gian để tiến hành truyền thông là:",
      "options": [
        {
          "key": "A",
          "text": "Thời gian của ban tổ chức"
        },
        {
          "key": "B",
          "text": "Thời tiết"
        },
        {
          "key": "C",
          "text": "Những người có uy tín trong cộng đồng"
        },
        {
          "key": "D",
          "text": "Thời gian làm việc của đối tượng"
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "kngt_q_127",
      "index": 127,
      "question": "Chọn địa điểm để tiến hành truyền thông giáo dục sức khỏe nên:",
      "options": [
        {
          "key": "A",
          "text": "Để chính quyền địa phương chỉ định"
        },
        {
          "key": "B",
          "text": "Chọn tại trường học hoặc trạm y tế"
        },
        {
          "key": "C",
          "text": "Chọn nơi đối tượng thường tụ họp"
        },
        {
          "key": "D",
          "text": "Để những ngưòi quan trọng trong cộng đồng quyết định"
        }
      ],
      "correctAnswer": "C",
      "explanation": ""
    },
    {
      "id": "kngt_q_128",
      "index": 128,
      "question": "Cách làm nào sau đây đúng khi chọn địa điểm để làm công tác truyền thông giáo dục sức khỏe?",
      "options": [
        {
          "key": "A",
          "text": "Trường học"
        },
        {
          "key": "B",
          "text": "Những nơi mà đối tượng thường tụ họp"
        },
        {
          "key": "C",
          "text": "Những nơi hẻo lánh"
        },
        {
          "key": "D",
          "text": "Nơi có cán bộ y tế, chính quyền tham gia"
        }
      ],
      "correctAnswer": "B",
      "explanation": ""
    },
    {
      "id": "kngt_q_129",
      "index": 129,
      "question": "Tư vấn sức khỏe là hình thức giáo dục sức khỏe cho:",
      "options": [
        {
          "key": "A",
          "text": "Cá nhân"
        },
        {
          "key": "B",
          "text": "Nhóm nhỏ"
        },
        {
          "key": "C",
          "text": "Nhóm lớn"
        },
        {
          "key": "D",
          "text": "Đại chúng"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "kngt_q_130",
      "index": 130,
      "question": "Trong phương pháp tư vấn sức khỏe, người tư vấn đóng vai trò sau, NGOẠI TRỪ:",
      "options": [
        {
          "key": "A",
          "text": "Cung cấp thông tin cho đối tượng"
        },
        {
          "key": "B",
          "text": "Động viên đối tượng suy nghĩ về vấn đề của họ"
        },
        {
          "key": "C",
          "text": "Giúp đối tượng hiểu biết về vấn để, nguyên nhân của vấn đề"
        },
        {
          "key": "D",
          "text": "Giải quyết vấn đề cho đối tượng"
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "kngt_q_131",
      "index": 131,
      "question": "Tư vấn sức khỏe bao gồm bao nhiêu nguyên tắc?",
      "options": [
        {
          "key": "A",
          "text": "3"
        },
        {
          "key": "B",
          "text": "4"
        },
        {
          "key": "C",
          "text": "5"
        },
        {
          "key": "D",
          "text": "6"
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "kngt_q_132",
      "index": 132,
      "question": "Một điều cần tránh khi hỏi chuyện đối tượng trong giao tiếp là:",
      "options": [
        {
          "key": "A",
          "text": "Lắng nghe và quan sát đối tượng."
        },
        {
          "key": "B",
          "text": "Sử dụng từ ngữ đơn giản"
        },
        {
          "key": "C",
          "text": "Sử dụng câu hỏi đóng cho đối tượng dễ trả lời"
        },
        {
          "key": "D",
          "text": "Gợi cho đối tượng bày tỏ những ý nghĩ, cảm xúc của họ"
        }
      ],
      "correctAnswer": "C",
      "explanation": ""
    },
    {
      "id": "kngt_q_133",
      "index": 133,
      "question": "Khi giao tiếp, người làm giáo dục sức khoẻ nên:",
      "options": [
        {
          "key": "A",
          "text": "Giữ nét mặt nghiêm nghị"
        },
        {
          "key": "B",
          "text": "Luôn dùng tay để diễn tả"
        },
        {
          "key": "C",
          "text": "Vuốt tóc, sửa quần áo tỏ ra lịch sự"
        },
        {
          "key": "D",
          "text": "Có cách nhìn bao quát, không nhìn quá một nơi lâu"
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "kngt_q_134",
      "index": 134,
      "question": "Tính tích cưc, tự giác và sáng tạo trong Truyền thông – Giáo dục sức khỏe, thể hiện, Ngoại trừ",
      "options": [
        {
          "key": "A",
          "text": "Phát huy cao độ mọi kinh nghiệm. tiềm năng sáng tạo của nhân dân để tìm ra và lựa chọn các giải pháp tối ưu cho các vấn để sức khỏe của chính họ"
        },
        {
          "key": "B",
          "text": "Để mọi người tự giác chấp nhận cái mới, cái tiến bộ, chứ không áp đặt gò ép. ra lệnh"
        },
        {
          "key": "C",
          "text": "Khắc phục tính một chiều của thông tin giáo dục và tính thụ động của đối tượng giáo dục bằng cách thảo luận bình đắng với họ"
        },
        {
          "key": "D",
          "text": "Yêu cầu mọi người chấp nhận cái mới, cái tiến bộ trong nội dung GDSK"
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "kngt_q_135",
      "index": 135,
      "question": "Để thu thập thông tin về thái độ của đối tượng đầy đủ chính xác, người cán bộ y tế cần phải, Ngoại trừ:",
      "options": [
        {
          "key": "A",
          "text": "Tạo được môi trường trao đổi thông tin mà đối tượng thấy an toàn. tự tin"
        },
        {
          "key": "B",
          "text": "Phối hợp thông tin thu thập từ nhiều nguồn, kiểm tra chéo thông tin"
        },
        {
          "key": "C",
          "text": "Trong nhiều trường hợp yêu cầu đối tượng làm thử để kiểm tra cả kỹ năng và thái độ"
        },
        {
          "key": "D",
          "text": "Hiểu biết nhiều về đối tượng"
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "kngt_q_136",
      "index": 136,
      "question": "Lập kế hoạch GDSK cần",
      "options": [
        {
          "key": "A",
          "text": "Cần tiến hành phối hợp liên ngành"
        },
        {
          "key": "B",
          "text": "Công việc của tổ chức nào tổ chức đó tự làm"
        },
        {
          "key": "C",
          "text": "Không phối hợp với các ban nghành vì sợ chồng chéo công việc"
        },
        {
          "key": "D",
          "text": "Không nên tiến hành thí điểm trước"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "kngt_q_137",
      "index": 137,
      "question": "Tư vấn là gì:",
      "options": [
        {
          "key": "A",
          "text": "Là cuộc trò chuyện giữa 2 con người"
        },
        {
          "key": "B",
          "text": "Là hoạt động trao đổi 2 chiều của con người với con người"
        },
        {
          "key": "C",
          "text": "Là hoạt động trao đổi thông tin giữa người có nhu cầu cần tư vấn và người tư vấn"
        },
        {
          "key": "D",
          "text": "Là trao đổi giữa 2 người bạn với nhau"
        }
      ],
      "correctAnswer": "C",
      "explanation": ""
    },
    {
      "id": "kngt_q_138",
      "index": 138,
      "question": "Về mặt hành chính, Trung tâm TT- GDSK tỉnh, chịu sử quản lý và chỉ đạo",
      "options": [
        {
          "key": "A",
          "text": "Trực tiếp của Sở Y tế"
        },
        {
          "key": "B",
          "text": "Gián tiếp của Sở Y tế"
        },
        {
          "key": "C",
          "text": "Trực tiếp của Bộ Y tế"
        },
        {
          "key": "D",
          "text": "Gián tiếp của Bộ Y tế"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "kngt_q_139",
      "index": 139,
      "question": "Các vấn đề liên quan trong khai thác bệnh sử như sau, NGOẠI TRỪ:",
      "options": [
        {
          "key": "A",
          "text": "Khi nào? Thời gian bao lâu?"
        },
        {
          "key": "B",
          "text": "Vị trí? Yếu tố làm tăng, giảm?"
        },
        {
          "key": "C",
          "text": "Hỏi sử dụng thuốc lá, rượu bia, chất kích thích"
        },
        {
          "key": "D",
          "text": "Đã điều trị nội, ngoại khoa?"
        }
      ],
      "correctAnswer": "C",
      "explanation": ""
    },
    {
      "id": "kngt_q_140",
      "index": 140,
      "question": "Để khai thác tiền sử trẻ em, NVYT cần?",
      "options": [
        {
          "key": "A",
          "text": "Tạo môi trường giao tiếp thoải mái"
        },
        {
          "key": "B",
          "text": "Giao tiếp khuyến khích cha mẹ tham gia tích cực"
        },
        {
          "key": "C",
          "text": "Luôn yêu cầu trẻ phải trả lời đúng trọng tâm vấn đề"
        },
        {
          "key": "D",
          "text": "Câu A và B đúng"
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "kngt_q_141",
      "index": 141,
      "question": "Những biểu hiện của giao tiếp không lời bao gồm những dấu hiệu nào sau đây:",
      "options": [
        {
          "key": "A",
          "text": "NB nói nhanh và thường xuyên lên giọng"
        },
        {
          "key": "B",
          "text": "NB liên tục quơ tay khi nói"
        },
        {
          "key": "C",
          "text": "NB ngồi khom lưng, co cụm và liên tục nhìn xuống đất"
        },
        {
          "key": "D",
          "text": "NB trả lời các câu hỏi từ bác sĩ"
        }
      ],
      "correctAnswer": "C",
      "explanation": ""
    },
    {
      "id": "kngt_q_142",
      "index": 142,
      "question": "Theo tổ chức một cuộc giao tiếp, giai đoạn bắt đầu cần:",
      "options": [
        {
          "key": "A",
          "text": "Chào hỏi, hỏi đầy đủ phần hành chính, lý do Người bệnh đến khám"
        },
        {
          "key": "B",
          "text": "Chào hỏi, khuyến khích người bệnh vào chủ đề, lý do NB đến khám"
        },
        {
          "key": "C",
          "text": "Chào hỏi, lý do người bệnh đến khám, tóm tắt những gì NB nói, kiểm tra độ chính xác thông tin"
        },
        {
          "key": "D",
          "text": "Chào hỏi, lý do Người bệnh đến khám, kiểm tra độ chính xác thông tin"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "kngt_q_143",
      "index": 143,
      "question": "Trong giao tiếp cộng đồng, giai đoạn đầu tiên NVYT cần hình thành:",
      "options": [
        {
          "key": "A",
          "text": "Bầu không khí cởi mở, thoả mái"
        },
        {
          "key": "B",
          "text": "Bầu không khí trang trọng"
        },
        {
          "key": "C",
          "text": "Bầu không khí trang nghiêm"
        },
        {
          "key": "D",
          "text": "Bầu không khí ồn ào"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "kngt_q_144",
      "index": 144,
      "question": "Khi người bệnh trình bày bệnh của mình cho NVYT, người NVYT cần phải:",
      "options": [
        {
          "key": "A",
          "text": "Nghe qua loa, không cần thiết"
        },
        {
          "key": "B",
          "text": "Tránh tiếp xúc thân mật với NB"
        },
        {
          "key": "C",
          "text": "Kiên nhẫn lắng nghe, nghe một cách kỹ lưỡng"
        },
        {
          "key": "D",
          "text": "Thể hiện lắng nghe chủ động"
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "kngt_q_145",
      "index": 145,
      "question": "Tâm lý của NB khi nhập viện, Ngoại trừ:",
      "options": [
        {
          "key": "A",
          "text": "Lo lắng"
        },
        {
          "key": "B",
          "text": "Sợ xa người thân"
        },
        {
          "key": "C",
          "text": "Được thầy thuốc quan tâm"
        },
        {
          "key": "D",
          "text": "Biết hỏi và lắng nghe tích cực"
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "kngt_q_146",
      "index": 146,
      "question": "Khi giao tiếp với người giảm trí nhớ cần chú ý những điều sau đây, Ngoại trừ:",
      "options": [
        {
          "key": "A",
          "text": "Kiên nhẫn dành thời gian giao tiếp với họ"
        },
        {
          "key": "B",
          "text": "Luôn giữ tư thế đối diện với đối tượng"
        },
        {
          "key": "C",
          "text": "Nói to, rõ để họ tiếp nhận thông tin"
        },
        {
          "key": "D",
          "text": "Tất cả đều đúng"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "kngt_q_147",
      "index": 147,
      "question": "Trong giao tiếp cộng đồng, giai đoạn đầu tiên NVYT cần hình thành:",
      "options": [
        {
          "key": "A",
          "text": "Bầu không khí cởi mở, thoả mái"
        },
        {
          "key": "B",
          "text": "Bầu không khí trang trọng"
        },
        {
          "key": "C",
          "text": "Bầu không khí trang nghiêm"
        },
        {
          "key": "D",
          "text": "Bầu không khí ồn ào"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "kngt_q_148",
      "index": 148,
      "question": "Khi người bệnh trình bày bệnh của mình cho NVYT, người NVYT cần phải:",
      "options": [
        {
          "key": "A",
          "text": "Nghe qua loa, không cần thiết"
        },
        {
          "key": "B",
          "text": "Tránh tiếp xúc thân mật với NB"
        },
        {
          "key": "C",
          "text": "Kiên nhẫn lắng nghe, nghe một cách kỹ lưỡng"
        },
        {
          "key": "D",
          "text": "Thể hiện lắng nghe chủ động"
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "kngt_q_149",
      "index": 149,
      "question": "Tâm lý của NB khi nhập viện, Ngoại trừ:",
      "options": [
        {
          "key": "A",
          "text": "Lo lắng"
        },
        {
          "key": "B",
          "text": "Sợ xa người thân"
        },
        {
          "key": "C",
          "text": "Được thầy thuốc quan tâm"
        },
        {
          "key": "D",
          "text": "Biết hỏi và lắng nghe tích cực"
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "kngt_q_150",
      "index": 150,
      "question": "Khi giao tiếp với người giảm trí nhớ cần chú ý những điều sau đây, Ngoại trừ:",
      "options": [
        {
          "key": "A",
          "text": "Kiên nhẫn dành thời gian giao tiếp với họ"
        },
        {
          "key": "B",
          "text": "Luôn giữ tư thế đối diện với đối tượng"
        },
        {
          "key": "C",
          "text": "Nói to, rõ để họ tiếp nhận thông tin"
        },
        {
          "key": "D",
          "text": "Tất cả đều đúng ----------------------------------------------- ----------- HẾT ----------"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    }
  ]
};


const SINHLY_BANK = {
  "id": "bank_sinhly_150",
  "title": "7. Đề cương Sinh lý bệnh – Miễn dịch",
  "createdAt": "2026-10-22T20:25:00.000Z",
  "tags": [
    "Y Dược",
    "Sinh Lý Bệnh",
    "Miễn Dịch"
  ],
  "questions": [
    {
      "id": "q_sinhly_1",
      "index": 1,
      "question": "Định nghĩa bệnh nguyên",
      "options": [
        {
          "key": "A",
          "text": "Yếu tố quyết định tính đặc trưng của bệnh"
        },
        {
          "key": "B",
          "text": "Yếu tố chủ yếu làm bệnh phát sinh"
        },
        {
          "key": "C",
          "text": "Yếu tố quyết định sự diễn biến của bệnh"
        },
        {
          "key": "D",
          "text": ""
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "q_sinhly_2",
      "index": 2,
      "question": "Nguyên nhân gây bệnh",
      "options": [
        {
          "key": "A",
          "text": "Quyết định gây ra bệnh"
        },
        {
          "key": "B",
          "text": "Quyết định tính đặc trưng của bệnh"
        },
        {
          "key": "C",
          "text": ""
        },
        {
          "key": "D",
          "text": "Quyết định sự diễn biến của bệnh"
        }
      ],
      "correctAnswer": "C",
      "explanation": ""
    },
    {
      "id": "q_sinhly_3",
      "index": 3,
      "question": "Yếu tố xã hội",
      "options": [
        {
          "key": "A",
          "text": "Là một nguyên nhân gây bệnh"
        },
        {
          "key": "B",
          "text": "Là yếu tố làm thay đổi vai trò của nguyên nhân gây bệnh"
        },
        {
          "key": "C",
          "text": ""
        },
        {
          "key": "D",
          "text": "Không ảnh hưởng đến bệnh nguyên"
        }
      ],
      "correctAnswer": "C",
      "explanation": ""
    },
    {
      "id": "q_sinhly_4",
      "index": 4,
      "question": "Thể tạng",
      "options": [
        {
          "key": "A",
          "text": "Làm thay đổi tính đặc trưng của bệnh"
        },
        {
          "key": "B",
          "text": "Làm bệnh khó phát sinh"
        },
        {
          "key": "C",
          "text": "Làm bệnh dễ phát sinh"
        },
        {
          "key": "D",
          "text": ""
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "q_sinhly_5",
      "index": 5,
      "question": "Bệnh di truyền",
      "options": [
        {
          "key": "A",
          "text": "Không có nguyên nhân"
        },
        {
          "key": "B",
          "text": ""
        },
        {
          "key": "C",
          "text": "Do sai sót của ARN"
        },
        {
          "key": "D",
          "text": "Do rối loạn cấu trúc của ty thể"
        }
      ],
      "correctAnswer": "B",
      "explanation": ""
    },
    {
      "id": "q_sinhly_6",
      "index": 6,
      "question": "Nguyên nhân gây bệnh chính hiện nay đối với nước ta",
      "options": [
        {
          "key": "A",
          "text": "Yếu tố cơ học"
        },
        {
          "key": "B",
          "text": "Yếu tố vật lý"
        },
        {
          "key": "C",
          "text": "Yếu tố hóa học"
        },
        {
          "key": "D",
          "text": ""
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "q_sinhly_7",
      "index": 7,
      "question": "Glucose máu bình thường khoảng:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "2 g/lít"
        },
        {
          "key": "C",
          "text": "3 g/lít"
        },
        {
          "key": "D",
          "text": "4 g/lít."
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_8",
      "index": 8,
      "question": "Gan cung cấp glucose cho máu chủ yếu bằng cách",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Tân tạo glucose từ protid"
        },
        {
          "key": "C",
          "text": "Tân tạo glucose từ acid béo"
        },
        {
          "key": "D",
          "text": "Tạo Glucose từ acid lactic"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_9",
      "index": 9,
      "question": "Triệu chứng xuất hiện sớm nhất và thường gặp khi glucose máu giảm nhẹ",
      "options": [
        {
          "key": "A",
          "text": "Mất thăng bằng, chóng mặt"
        },
        {
          "key": "B",
          "text": "Cồn cào(dạ dày, ruột tăng co bóp)"
        },
        {
          "key": "C",
          "text": "Tim đập nhanh, rối loạn nhịp tim"
        },
        {
          "key": "D",
          "text": ""
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "q_sinhly_10",
      "index": 10,
      "question": "Nguồn cung cấp glucose chủ yếu hàng ngày:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Thịt heo"
        },
        {
          "key": "C",
          "text": "Đường"
        },
        {
          "key": "D",
          "text": "Cá."
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_11",
      "index": 11,
      "question": "Thực phẩm cung cấp glucid cho cơ thể:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Thịt heo"
        },
        {
          "key": "C",
          "text": "Đường"
        },
        {
          "key": "D",
          "text": "Cá."
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_12",
      "index": 12,
      "question": "Lòng trắng trứng chủ yếu cung cấp thành phần nào cho cơ thể:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Lipid"
        },
        {
          "key": "C",
          "text": "Glucid"
        },
        {
          "key": "D",
          "text": "Vitamin."
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_13",
      "index": 13,
      "question": "Sinh glucose mới từ:",
      "options": [
        {
          "key": "A",
          "text": "Lách hủy Glycogen thành glucose"
        },
        {
          "key": "B",
          "text": ""
        },
        {
          "key": "C",
          "text": "Thận tăng tái hấp thu glucose"
        },
        {
          "key": "D",
          "text": "Tủy xương tăng tạo glucose"
        }
      ],
      "correctAnswer": "B",
      "explanation": ""
    },
    {
      "id": "q_sinhly_14",
      "index": 14,
      "question": "Khi lượng glucose trong máu giảm, cơ thể sẽ điều chỉnh bằng cách:",
      "options": [
        {
          "key": "A",
          "text": "Lách hủy Glycogen thành glucose"
        },
        {
          "key": "B",
          "text": ""
        },
        {
          "key": "C",
          "text": "Thận tăng tái hấp thu glucose"
        },
        {
          "key": "D",
          "text": "Tủy xương tăng tạo glucose"
        }
      ],
      "correctAnswer": "B",
      "explanation": ""
    },
    {
      "id": "q_sinhly_15",
      "index": 15,
      "question": "Hệ làm giảm glucose máu:",
      "options": [
        {
          "key": "A",
          "text": "Insulin do gan tiết ra"
        },
        {
          "key": "B",
          "text": ""
        },
        {
          "key": "C",
          "text": "Glucagon tiết từ tụy"
        },
        {
          "key": "D",
          "text": "Mật do gan tiết ra"
        }
      ],
      "correctAnswer": "B",
      "explanation": ""
    },
    {
      "id": "q_sinhly_16",
      "index": 16,
      "question": "Insulin có tác dụng:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Làm giảm tạo glycogen ở gan"
        },
        {
          "key": "C",
          "text": "Giảm tạo lipid từ glucid"
        },
        {
          "key": "D",
          "text": "Kích thích hủy glycogen thành glucose"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_17",
      "index": 17,
      "question": "Glucagon có tác dụng:",
      "options": [
        {
          "key": "A",
          "text": "Giảm đường huyết"
        },
        {
          "key": "B",
          "text": "Tăng mỡ máu"
        },
        {
          "key": "C",
          "text": "Ổn định nồng độ caxi"
        },
        {
          "key": "D",
          "text": ""
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "q_sinhly_18",
      "index": 18,
      "question": "Tác dụng chính của Glucagon:",
      "options": [
        {
          "key": "A",
          "text": "Giảm đường huyết"
        },
        {
          "key": "B",
          "text": "Kích thích hệ giao cảm"
        },
        {
          "key": "C",
          "text": "Ổn định huyết áp"
        },
        {
          "key": "D",
          "text": ""
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "q_sinhly_19",
      "index": 19,
      "question": "Glucagon được tiết ra từ cơ quan nào:",
      "options": [
        {
          "key": "A",
          "text": "Gan"
        },
        {
          "key": "B",
          "text": "Thận"
        },
        {
          "key": "C",
          "text": ""
        },
        {
          "key": "D",
          "text": "Lách"
        }
      ],
      "correctAnswer": "C",
      "explanation": ""
    },
    {
      "id": "q_sinhly_20",
      "index": 20,
      "question": "Các hormon do tuỵ tiết ra:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Thyrocin"
        },
        {
          "key": "C",
          "text": "Adrenalin"
        },
        {
          "key": "D",
          "text": "ADH"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_21",
      "index": 21,
      "question": "Các hormon do tuỵ tiết ra:",
      "options": [
        {
          "key": "A",
          "text": "Insulin, ADH"
        },
        {
          "key": "B",
          "text": "Thyrocin, Pepsin"
        },
        {
          "key": "C",
          "text": ""
        },
        {
          "key": "D",
          "text": "ADH, Progesteron"
        }
      ],
      "correctAnswer": "C",
      "explanation": ""
    },
    {
      "id": "q_sinhly_22",
      "index": 22,
      "question": "Adrenalin được tiết ra từ tuyến nội tiết nào:",
      "options": [
        {
          "key": "A",
          "text": "Tuyến yên"
        },
        {
          "key": "B",
          "text": ""
        },
        {
          "key": "C",
          "text": "Tuyến tuỵ"
        },
        {
          "key": "D",
          "text": "Tuyến giáp"
        }
      ],
      "correctAnswer": "B",
      "explanation": ""
    },
    {
      "id": "q_sinhly_23",
      "index": 23,
      "question": "Adrenalin có tác dụng:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Co thắt khí quản"
        },
        {
          "key": "C",
          "text": "Giảm mỡ máu"
        },
        {
          "key": "D",
          "text": "Ức chế thần kinh giao cảm"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_24",
      "index": 24,
      "question": "Giảm glucose trong máu khi:",
      "options": [
        {
          "key": "A",
          "text": "Giảm tiết glucose từ gian bào"
        },
        {
          "key": "B",
          "text": ""
        },
        {
          "key": "C",
          "text": "Ứ đọng glycogen ở cơ"
        },
        {
          "key": "D",
          "text": "Bệnh nhân béo phì"
        }
      ],
      "correctAnswer": "B",
      "explanation": ""
    },
    {
      "id": "q_sinhly_25",
      "index": 25,
      "question": "Giảm glucose trong máu do:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Do giảm men tổng hợp glycogen tế bào bêta của tuyến tụy."
        },
        {
          "key": "C",
          "text": "Do mất qua đường mật"
        },
        {
          "key": "D",
          "text": "Thiếu Insulin tương đối"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_26",
      "index": 26,
      "question": "Giai đoạn đầu giảm glucose máu sẽ phát sinh cảm giác đói do:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Insulin tăng"
        },
        {
          "key": "C",
          "text": "Glucagon giảm"
        },
        {
          "key": "D",
          "text": "Adrenalin giảm"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_27",
      "index": 27,
      "question": "Bệnh sinh của đái đường type I do di truyền, môi trường, và:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Nhiễm khuẩn"
        },
        {
          "key": "C",
          "text": "Nhiễm siêu vi khuẩn"
        },
        {
          "key": "D",
          "text": "Nhiễm độc"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_28",
      "index": 28,
      "question": "Insulin thiếu tương đối là:",
      "options": [
        {
          "key": "A",
          "text": "Lượng insulin thiếu ít"
        },
        {
          "key": "B",
          "text": ""
        },
        {
          "key": "C",
          "text": "Lượng insulin thiếu nhiều"
        },
        {
          "key": "D",
          "text": "Lượng insulin không ổn định"
        }
      ],
      "correctAnswer": "B",
      "explanation": ""
    },
    {
      "id": "q_sinhly_29",
      "index": 29,
      "question": "Cơ chế của biến chứng  dây thần kinh thứ phát trong đái tháo đường:",
      "options": [
        {
          "key": "A",
          "text": "Trong các tế bào Schwann của các dây thần kinh thấy có sự tích lũy của các acide"
        },
        {
          "key": "B",
          "text": ""
        },
        {
          "key": "C",
          "text": "Trong các tế bào của các dây thần kinh có sự tích lũy của các thể keton"
        },
        {
          "key": "D",
          "text": "Trong các tế bào của các dây thần kinh có sự tích lũy của các tế bào mỡ"
        }
      ],
      "correctAnswer": "B",
      "explanation": ""
    },
    {
      "id": "q_sinhly_30",
      "index": 30,
      "question": "Cơ chế của nhiễm trùng trong đái tháo đường:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Do thừa năng lượng,"
        },
        {
          "key": "C",
          "text": "Do môi trường đường máu giảm"
        },
        {
          "key": "D",
          "text": "Do nhiễm keton"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_31",
      "index": 31,
      "question": "Cơ chế của Hôn mê của bệnh đái tháo đường:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Do aceton là các acid mạnh nên làm giảm pH máu"
        },
        {
          "key": "C",
          "text": "Do tình trạng giảm glucose máu lúc đầu làm tăng áp lực thẩm thấu ngoại bào"
        },
        {
          "key": "D",
          "text": "Do tăng nồng độ glucose máu nên gây thiểu niệu thẩm thấu"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_32",
      "index": 32,
      "question": "Glucose được thải qua thận khi glucose máu vượt quá ngưỡng thận là:",
      "options": [
        {
          "key": "A",
          "text": "0.8 g/lít"
        },
        {
          "key": "B",
          "text": "1.2 g/lít"
        },
        {
          "key": "C",
          "text": "1.6 g/lít."
        },
        {
          "key": "D",
          "text": ""
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "q_sinhly_33",
      "index": 33,
      "question": "Insulin có tác dụng làm tăng sử dụng glucose bằng cách là:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Làm giảm tạo glycogen ở gan"
        },
        {
          "key": "C",
          "text": "Giảm tạo lipid từ glucid."
        },
        {
          "key": "D",
          "text": "Kích thích hủy glycogen thành glucose."
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_34",
      "index": 34,
      "question": "Insulin có tác dụng làm giảm cung cấp glucose bằng cách là:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Ức chế sự sinh đường mới từ protid, lipid."
        },
        {
          "key": "C",
          "text": "Giảm tạo lipid từ glucid."
        },
        {
          "key": "D",
          "text": "Kích thích hủy glycogen thành glucose."
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_35",
      "index": 35,
      "question": "Insulin được tiết ra từ:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Vỏ tuyến thượng thận."
        },
        {
          "key": "C",
          "text": "Đoạn D2 của tá tràng."
        },
        {
          "key": "D",
          "text": "Ty thể của tế bào gan."
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_36",
      "index": 36,
      "question": "Hệ làm tăng glucose máu là:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Mật, glucagon, dịch vị"
        },
        {
          "key": "C",
          "text": "Insulin, ACTH, dịch mật"
        },
        {
          "key": "D",
          "text": "Lipase, ACTH, STH."
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_37",
      "index": 37,
      "question": "Hệ làm tăng glucose máu là:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Insulin, glucagon, Lipase"
        },
        {
          "key": "C",
          "text": "Insulin, ACTH, dịch mật"
        },
        {
          "key": "D",
          "text": "Lipase, dịch mật, STH."
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_38",
      "index": 38,
      "question": "Giảm glucose vào máu do:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Tăng tiết glucose từ gan vào máu"
        },
        {
          "key": "C",
          "text": "Các bệnh gây ứ đọng glycogen ở cơ"
        },
        {
          "key": "D",
          "text": "Do quá trình tân tạo glucose ở gan bị hạn chế"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_39",
      "index": 39,
      "question": "Giảm glucose vào máu do:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Giảm quá trình oxy hóa trong tế bào"
        },
        {
          "key": "C",
          "text": "Do mất qua đường mật"
        },
        {
          "key": "D",
          "text": "Thiếu Insulin tương đối."
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_40",
      "index": 40,
      "question": "Giảm glucose máu khi nồng độ glucose trong máu dưới:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "1.8 g/l"
        },
        {
          "key": "C",
          "text": "2.8 g/l"
        },
        {
          "key": "D",
          "text": "3.8 g/l"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_41",
      "index": 41,
      "question": "Tăng glucose máu khi nồng độ glucose trong máu:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Dưới 0.8 g/l"
        },
        {
          "key": "C",
          "text": "Dưới 1.2 g/l"
        },
        {
          "key": "D",
          "text": "Trên 0.8 g/l"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_42",
      "index": 42,
      "question": "Bệnh sinh của đái đường type I do di truyền, môi trường, và:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Nhiễm khuẩn"
        },
        {
          "key": "C",
          "text": "Nhiễm siêu vi khuẩn"
        },
        {
          "key": "D",
          "text": "Nhiễm độc."
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_43",
      "index": 43,
      "question": "Khi Glucose trong máu cao thì phần lớn sẽ chuyển đến:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Thận"
        },
        {
          "key": "C",
          "text": "Lách"
        },
        {
          "key": "D",
          "text": "Tụy"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_44",
      "index": 44,
      "question": "Khi cơ thể thiếu Glucose trong máu sẽ tân sinh từ:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Glycogen, PG"
        },
        {
          "key": "C",
          "text": "PG, Fructose"
        },
        {
          "key": "D",
          "text": "Pentose, PG"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_45",
      "index": 45,
      "question": "Khi cơ thể thiếu Glucose trong máu sẽ lấy từ:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Glycogen tại thận"
        },
        {
          "key": "C",
          "text": "Glycogen tại tụy"
        },
        {
          "key": "D",
          "text": "Acid lactic tại ruột non"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_46",
      "index": 46,
      "question": "Khi cơ thể thiếu Glucose trong máu sẽ thích nghi bằng:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Tim nhanh"
        },
        {
          "key": "C",
          "text": "Huyết áp tăng"
        },
        {
          "key": "D",
          "text": "Huyết áp hạ"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_47",
      "index": 47,
      "question": "Khi nồng độ Glucose trong máu tăng:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Tuỵ giảm tiết Insulin"
        },
        {
          "key": "C",
          "text": "Nồng độ glucagon tăng"
        },
        {
          "key": "D",
          "text": "Huyết áp hạ"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_48",
      "index": 48,
      "question": "Khi cơ thể thừa Glucose trong máu (&gt;180mg%) sẽ:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Giảm Insulin"
        },
        {
          "key": "C",
          "text": "Thải ra ngoài theo phân, mồ hôi"
        },
        {
          "key": "D",
          "text": "Huyết áp hạ"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_49",
      "index": 49,
      "question": "Hệ làm tăng glucose trong máu là:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Insulin tuyến thượng thận tiết ra"
        },
        {
          "key": "C",
          "text": "ACTH do tuyến tụy tiết ra"
        },
        {
          "key": "D",
          "text": "Glucagon do tuyến yên tiết ra"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_50",
      "index": 50,
      "question": "Khi cơ thể giảm Glucose trong máu, insulinase sẽ:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Tăng Insulin"
        },
        {
          "key": "C",
          "text": "Tăng ACTH"
        },
        {
          "key": "D",
          "text": "Tăng glucagon"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_51",
      "index": 51,
      "question": "Giảm tiết glucose từ gan vào máu. Gặp trong các trường hợp:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Tăng Insulin"
        },
        {
          "key": "C",
          "text": "Tăng men giáng hóa glycogen"
        },
        {
          "key": "D",
          "text": "Tăng glucagon"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_52",
      "index": 52,
      "question": "Giảm glucose trong  máu. Gặp trong các trường hợp:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Ít họat động"
        },
        {
          "key": "C",
          "text": "Suy tụy 🡪 Giảm insulin"
        },
        {
          "key": "D",
          "text": "Tăng glucagon"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_53",
      "index": 53,
      "question": "Giảm glucose trong  máu.  Gặp trong các trường hợp:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Cường vỏ thượng thận"
        },
        {
          "key": "C",
          "text": "Suy tụy 🡪 Giảm insulin"
        },
        {
          "key": "D",
          "text": "Tăng tế bào alpha của tụy do U"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_54",
      "index": 54,
      "question": "Cơ chế của các biểu hiện lâm sàng trong giảm glucose máu:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Ức chế hệ thống nội tiết bài tiết các hormon để gây tăng glucose máu"
        },
        {
          "key": "C",
          "text": "Tăng tiết insulin"
        },
        {
          "key": "D",
          "text": "Tế bào alpha của tụy giảm họat động"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_55",
      "index": 55,
      "question": "Glucose máu giảm sẽ làm tăng tiết các catecholamin gây:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Giãn mạch"
        },
        {
          "key": "C",
          "text": "Tim đập chậm"
        },
        {
          "key": "D",
          "text": "Huyết áp giảm"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_56",
      "index": 56,
      "question": "Glucose máu giảm sẽ làm tăng tiết các catecholamin gây:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Hoa mắt do co đồng tử"
        },
        {
          "key": "C",
          "text": "Hoa mắt do Tim đập chậm"
        },
        {
          "key": "D",
          "text": "Hoa mắt do huyết áp giảm"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_57",
      "index": 57,
      "question": "Gọi là bệnh đái tháo đường:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Khi glucose có trong nước tiểu"
        },
        {
          "key": "C",
          "text": "Khi glucose/ máu cao và glucose có trong nước tiểu"
        },
        {
          "key": "D",
          "text": "Khi glucose/máu cao và glucose có trong nước tiểu và có biểu hiện lâm sàng"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_58",
      "index": 58,
      "question": "Tình trạng thiếu insulin (tương đối hoặc tuyệt đối) sẽ làm cho:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Tăng sử dụng glucose ngoại biên."
        },
        {
          "key": "C",
          "text": "Tăng tân sinh đường và giảm một cách đáng kể sự dị hóa nitơ."
        },
        {
          "key": "D",
          "text": "Giảm tiêu mỡ"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_59",
      "index": 59,
      "question": "Lipid:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Lipid được đốt để tạo glucose 🡪 năng lượng tại các tế bào"
        },
        {
          "key": "C",
          "text": "Lipid là nguồn năng lượng dự trữ lớn sau glucose"
        },
        {
          "key": "D",
          "text": "Cần cho sự tổng hợp dịch vị, các hormon steroid thượng thận và sinh dục"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_60",
      "index": 60,
      "question": "Lipid dạng nhũ tương thường được ruột hấp thu nhiều nhất",
      "options": [
        {
          "key": "A",
          "text": "Acid béo"
        },
        {
          "key": "B",
          "text": "Monoglycerid"
        },
        {
          "key": "C",
          "text": "Diglycerid"
        },
        {
          "key": "D",
          "text": ""
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "q_sinhly_61",
      "index": 61,
      "question": "Nội tiết tố có vai trò thoái hóa lipid mạnh mẽ nhất",
      "options": [
        {
          "key": "A",
          "text": "ACTH"
        },
        {
          "key": "B",
          "text": "Thyroxin"
        },
        {
          "key": "C",
          "text": ""
        },
        {
          "key": "D",
          "text": "Noradrenalin"
        }
      ],
      "correctAnswer": "C",
      "explanation": ""
    },
    {
      "id": "q_sinhly_62",
      "index": 62,
      "question": "Cơ thể tăng huy động dự trử mỡ thường gặp nhất",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Sốt"
        },
        {
          "key": "C",
          "text": "Đái đường"
        },
        {
          "key": "D",
          "text": "Basedow"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_63",
      "index": 63,
      "question": "Khi đói kéo dài, nơi bị sụt giảm lipid dự trử biểu hiện rõ và sớm nhất",
      "options": [
        {
          "key": "A",
          "text": "Thần kinh"
        },
        {
          "key": "B",
          "text": ""
        },
        {
          "key": "C",
          "text": "Tuyến sinh dục"
        },
        {
          "key": "D",
          "text": "Cơ trơn"
        }
      ],
      "correctAnswer": "B",
      "explanation": ""
    },
    {
      "id": "q_sinhly_64",
      "index": 64,
      "question": "Xét nghiệm tương đối có giá trị hơn cả trong dự đoán xơ vữa mạch",
      "options": [
        {
          "key": "A",
          "text": "Lượng cholesterol toàn phần"
        },
        {
          "key": "B",
          "text": "Lượng lipid toàn phần"
        },
        {
          "key": "C",
          "text": "Lượng trigycerid"
        },
        {
          "key": "D",
          "text": ""
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "q_sinhly_65",
      "index": 65,
      "question": "Cơ chế gây xơ vữa mạch của LDL",
      "options": [
        {
          "key": "A",
          "text": "Tồn tại lâu trong máu"
        },
        {
          "key": "B",
          "text": ""
        },
        {
          "key": "C",
          "text": "LDL chứa nhiều lipid hơn HDL"
        },
        {
          "key": "D",
          "text": "Khó bị oxy hóa"
        }
      ],
      "correctAnswer": "B",
      "explanation": ""
    },
    {
      "id": "q_sinhly_66",
      "index": 66,
      "question": "Hiện tượng xảy ra sớm thường gặp ở những người béo ph",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Nhiễm khuẩn"
        },
        {
          "key": "C",
          "text": "Xơ vữa động mạch"
        },
        {
          "key": "D",
          "text": "Loãng xương"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_67",
      "index": 67,
      "question": "Lipid:",
      "options": [
        {
          "key": "A",
          "text": "Là nguồn năng lượng trực tiếp chiếm 70% năng lượng cơ thể."
        },
        {
          "key": "B",
          "text": ""
        },
        {
          "key": "C",
          "text": "Mô mỡ chiếm khoảng 65-70% trọng lượng cơ thể ở người trưởng thành"
        },
        {
          "key": "D",
          "text": "Cần cho sự tổng hợp dịch vị, các hormon steroid thượng thận và sinh dục"
        }
      ],
      "correctAnswer": "B",
      "explanation": ""
    },
    {
      "id": "q_sinhly_68",
      "index": 68,
      "question": "Lipid:",
      "options": [
        {
          "key": "A",
          "text": "Là nguồn năng lượng trực tiếp chiếm 70% năng lượng cơ thể."
        },
        {
          "key": "B",
          "text": ""
        },
        {
          "key": "C",
          "text": "Khối lượng mỡ ở nam giới cao hơn nữ giới và giảm dần theo tuổi. Nếu cơ thể tích trữ quá nhiều lipid sẽ bị suy dinh dưỡng."
        },
        {
          "key": "D",
          "text": "Cần cho sự tổng hợp dịch vị, các hormon steroid thượng thận và dịch ruột."
        }
      ],
      "correctAnswer": "B",
      "explanation": ""
    },
    {
      "id": "q_sinhly_69",
      "index": 69,
      "question": "Công thức tính chỉ số khối (BMI) là bằng:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Chiều cao cơ thể chia cho bình phương trọng lượng cơ thể (cm/kg 2)"
        },
        {
          "key": "C",
          "text": "Trọng lượng cơ thể chia bình phương chiều cao cơ thể (g/m2)"
        },
        {
          "key": "D",
          "text": "Chiều cao cơ thể chia cho bình phương trọng lượng cơ thể (cm2/g)"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_70",
      "index": 70,
      "question": "Hai vấn đề lớn thường gặp trong rối loạn chuyển hóa lipid là:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Tình trạng béo phì và rối loạn glucose máu."
        },
        {
          "key": "C",
          "text": "Rối loạn nội tiết và rối loạn lipoprotein máu"
        },
        {
          "key": "D",
          "text": "Rối loạn glucose máu và rối loạn nội tiết"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_71",
      "index": 71,
      "question": "Chỉ số khối cơ thể (BMI) bình thường:",
      "options": [
        {
          "key": "A",
          "text": "dưới 18.5"
        },
        {
          "key": "B",
          "text": "25-27"
        },
        {
          "key": "C",
          "text": "25-30"
        },
        {
          "key": "D",
          "text": ""
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "q_sinhly_72",
      "index": 72,
      "question": "Cơ chế béo phì:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Béo phì là hậu quả của sự gia tăng protide"
        },
        {
          "key": "C",
          "text": "Béo phì là hậu quả của sự gia tăng xương"
        },
        {
          "key": "D",
          "text": "Béo phì là hậu quả của sự gia tăng chất lỏng"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_73",
      "index": 73,
      "question": "Hậu quả của béo phì có thể gây:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Bệnh đái đường týp I"
        },
        {
          "key": "C",
          "text": "Hạ huyết áp do tăng LDL"
        },
        {
          "key": "D",
          "text": "Sỏi niệu"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_74",
      "index": 74,
      "question": "Hậu quả của béo phì có thể gây:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Bệnh đái đường týp I"
        },
        {
          "key": "C",
          "text": "Hạ huyết áp do tăng LDL"
        },
        {
          "key": "D",
          "text": "Sỏi niệu"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_75",
      "index": 75,
      "question": "Hậu quả của béo phì có thể gây:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Bệnh đái đường týp I"
        },
        {
          "key": "C",
          "text": "Hạ huyết áp do tăng LDL"
        },
        {
          "key": "D",
          "text": "Sỏi niệu"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_76",
      "index": 76,
      "question": "Hậu quả của béo phì có thể gây:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Bệnh đái đường týp I"
        },
        {
          "key": "C",
          "text": "Hạ huyết áp do tăng LDL"
        },
        {
          "key": "D",
          "text": "Sỏi niệu"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_77",
      "index": 77,
      "question": "Các chất gây tăng lipid máu:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Insulin"
        },
        {
          "key": "C",
          "text": "Glucagon"
        },
        {
          "key": "D",
          "text": "Pepsin"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_78",
      "index": 78,
      "question": "Tăng lipoprotein máu có nguy cơ:",
      "options": [
        {
          "key": "A",
          "text": "Gây xơ vữa động mạch, từ đó tăng tính đàn hồi"
        },
        {
          "key": "B",
          "text": "Hạ huyết áp do tăng LDL"
        },
        {
          "key": "C",
          "text": ""
        },
        {
          "key": "D",
          "text": "Thiếu năng lượng"
        }
      ],
      "correctAnswer": "C",
      "explanation": ""
    },
    {
      "id": "q_sinhly_79",
      "index": 79,
      "question": "Tăng lipoprotein máu có nguy cơ, ngoại trừ:",
      "options": [
        {
          "key": "A",
          "text": "Nhồi máu cơ tim."
        },
        {
          "key": "B",
          "text": "Bệnh lý động mạch vành"
        },
        {
          "key": "C",
          "text": ""
        },
        {
          "key": "D",
          "text": "Tăng huyết áp"
        }
      ],
      "correctAnswer": "C",
      "explanation": ""
    },
    {
      "id": "q_sinhly_80",
      "index": 80,
      "question": "Phân loại tăng lipoprotein máu của Frederickson/WHO:",
      "options": [
        {
          "key": "A",
          "text": "Type I : LDL"
        },
        {
          "key": "B",
          "text": "Type II : IDL"
        },
        {
          "key": "C",
          "text": "Type III : LDL và VLDL"
        },
        {
          "key": "D",
          "text": ""
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "q_sinhly_81",
      "index": 81,
      "question": "Ở người dưới 30 tuổi, Cholesterol máu lý tưởng là:",
      "options": [
        {
          "key": "A",
          "text": "&lt;1,8 g/L"
        },
        {
          "key": "B",
          "text": ""
        },
        {
          "key": "C",
          "text": "2-4 g/L"
        },
        {
          "key": "D",
          "text": "&gt; 4g/L"
        }
      ],
      "correctAnswer": "B",
      "explanation": ""
    },
    {
      "id": "q_sinhly_82",
      "index": 82,
      "question": "Tăng cholesterol máu týp IIa:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Do giảm thụ thể của HDL."
        },
        {
          "key": "C",
          "text": "Do tăng chuyển hóa của HDL"
        },
        {
          "key": "D",
          "text": "Do tăng Triglycerid"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_83",
      "index": 83,
      "question": "Triglycerid (TG):",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Khi trên 1.2g/L là bệnh lý."
        },
        {
          "key": "C",
          "text": "Tăng TG tương ứng với tăng HDL"
        },
        {
          "key": "D",
          "text": "Tăng TG có thể là tiên phát do thiếu HDL"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_84",
      "index": 84,
      "question": "Triglycerid (TG) có nhiều dưới dạng:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "HDL"
        },
        {
          "key": "C",
          "text": "LDL"
        },
        {
          "key": "D",
          "text": "IDL"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_85",
      "index": 85,
      "question": "Cholesteron có nhiều dưới dạng:",
      "options": [
        {
          "key": "A",
          "text": "VLDL"
        },
        {
          "key": "B",
          "text": "HDL"
        },
        {
          "key": "C",
          "text": ""
        },
        {
          "key": "D",
          "text": "IDL"
        }
      ],
      "correctAnswer": "C",
      "explanation": ""
    },
    {
      "id": "q_sinhly_86",
      "index": 86,
      "question": "Hầu hết Lipoprotein tạo thành tại:",
      "options": [
        {
          "key": "A",
          "text": "Thận"
        },
        {
          "key": "B",
          "text": "Phổi"
        },
        {
          "key": "C",
          "text": ""
        },
        {
          "key": "D",
          "text": "Tụy"
        }
      ],
      "correctAnswer": "C",
      "explanation": ""
    },
    {
      "id": "q_sinhly_87",
      "index": 87,
      "question": "Hormon làm tăng thoái hóa lipid:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "ADH"
        },
        {
          "key": "C",
          "text": "Aldosteron"
        },
        {
          "key": "D",
          "text": "Insulin"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_88",
      "index": 88,
      "question": "Hormon kích thích tổng hợp Triglyceride:",
      "options": [
        {
          "key": "A",
          "text": "ACTH"
        },
        {
          "key": "B",
          "text": "ADH"
        },
        {
          "key": "C",
          "text": "Aldosteron"
        },
        {
          "key": "D",
          "text": ""
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "q_sinhly_89",
      "index": 89,
      "question": "Gọi là gan nhiễm mỡ khi:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Hầu hết các trường hợp là do tăng tích trữ glucose."
        },
        {
          "key": "C",
          "text": "Do giảm tổng hợp triglycerid bên trong tế bào gan"
        },
        {
          "key": "D",
          "text": "Tăng vận chuyển triglycerid ra khỏi gan"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_90",
      "index": 90,
      "question": "Khi ăn 100 gram mỡ cho ta lượng lipid:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "100 gram"
        },
        {
          "key": "C",
          "text": "90 gram"
        },
        {
          "key": "D",
          "text": "80 gram"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_91",
      "index": 91,
      "question": "Lipid",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "1g lipid cung cấp 4,1 kcal"
        },
        {
          "key": "C",
          "text": "1g lipid cung cấp  8,1 kcal"
        },
        {
          "key": "D",
          "text": "1g lipid cung cấp  3,1 kcal"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_92",
      "index": 92,
      "question": "Triglycerid (TG) máu bình thường dưới:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "2,5 g/L"
        },
        {
          "key": "C",
          "text": "3,5 g/L"
        },
        {
          "key": "D",
          "text": "4,5 g/L"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_93",
      "index": 93,
      "question": "Gọi là gan nhiễm mỡ khi lượng mỡ trong gan:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Trên 18%"
        },
        {
          "key": "C",
          "text": "Trên 23%"
        },
        {
          "key": "D",
          "text": "Trên 33%"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_94",
      "index": 94,
      "question": "Nhu cầu về lượng protid ở người trưởng thành là:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "0,6 g/kg cân nặng mỗi ngày"
        },
        {
          "key": "C",
          "text": "0,7 g/kg cân nặng mỗi ngày"
        },
        {
          "key": "D",
          "text": "0,9 g/kg cân nặng mỗi ngày"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_95",
      "index": 95,
      "question": "Nhu cầu về chất protid ở người trưởng thành là:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Đủ 8 acid amin cần thiết"
        },
        {
          "key": "C",
          "text": "Đủ 7 acid amin cần thiết"
        },
        {
          "key": "D",
          "text": "Đủ 6 acid amin cần thiết"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_96",
      "index": 96,
      "question": "Protid thực vật thường thiếu acid amin là:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Histidin, isoleucin, leucin"
        },
        {
          "key": "C",
          "text": "Threonin, tryptophan và valin"
        },
        {
          "key": "D",
          "text": "Methionin, phenylalanin, threonin"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_97",
      "index": 97,
      "question": "Protid trong huyết tương bình thường vào khoảng:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "60-80g/L"
        },
        {
          "key": "C",
          "text": "50-80g/L"
        },
        {
          "key": "D",
          "text": "40-80g/L"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_98",
      "index": 98,
      "question": "Albumin/huyết tương bình thường khoảng:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "30-50g/L"
        },
        {
          "key": "C",
          "text": "25-50g/L"
        },
        {
          "key": "D",
          "text": "20-50g/L"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_99",
      "index": 99,
      "question": "Globulin/huyết tương bình thường khoảng:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "20-40g/L"
        },
        {
          "key": "C",
          "text": "30-50g/L"
        },
        {
          "key": "D",
          "text": "40-60g/L"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_100",
      "index": 100,
      "question": "Nguồn gốc chủ yếu của protid huyết tương:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Do tủy xương sản xuất"
        },
        {
          "key": "C",
          "text": "Do Lách sản xuất"
        },
        {
          "key": "D",
          "text": "Do tụy sản xuất"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_101",
      "index": 101,
      "question": "Vai trò của protid huyết tương:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Tạo áp lực Kiềm toan"
        },
        {
          "key": "C",
          "text": "Tạo áp lực thủy tĩnh"
        },
        {
          "key": "D",
          "text": "Tạo áp lực thẩm thấu"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_102",
      "index": 102,
      "question": "Vai trò của protid huyết tương:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Điều hòa cân bằng oxy"
        },
        {
          "key": "C",
          "text": "Điều hòa miễn dịch"
        },
        {
          "key": "D",
          "text": "Điều hòa hô hấp"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_103",
      "index": 103,
      "question": "Vai trò của protid huyết tương, ngoại trừ:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Tham gia bảo bệ cơ thể chống nhiễm trùng"
        },
        {
          "key": "C",
          "text": "Tham gia điều hòa cân bằng acid bazơ"
        },
        {
          "key": "D",
          "text": "Tham gia cơ chế đông máu"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_104",
      "index": 104,
      "question": "Protid thực vật thường thiếu acid amin:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Valin"
        },
        {
          "key": "C",
          "text": "Tyrosin"
        },
        {
          "key": "D",
          "text": "Histidin"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_105",
      "index": 105,
      "question": "Protid thực vật thường thiếu acid amin:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Valin"
        },
        {
          "key": "C",
          "text": "Threonin"
        },
        {
          "key": "D",
          "text": "Phenylalanin"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_106",
      "index": 106,
      "question": "Protid thực vật thường thiếu acid amin:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Isoleucin"
        },
        {
          "key": "C",
          "text": "Leucin"
        },
        {
          "key": "D",
          "text": "Arginin"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_107",
      "index": 107,
      "question": "Nguyên nhân gây giảm protid huyết tương, có thể gặp trong:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Tăng huyết áp"
        },
        {
          "key": "C",
          "text": "Đái tháo đường"
        },
        {
          "key": "D",
          "text": "Hen phế quản"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_108",
      "index": 108,
      "question": "Nguyên nhân gây giảm protid huyết tương, có thể gặp trong, ngoại trừ:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Xơ gan"
        },
        {
          "key": "C",
          "text": "Viêm tụy mạn"
        },
        {
          "key": "D",
          "text": "Sốt kéo dài"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_109",
      "index": 109,
      "question": "Hậu quả của giảm protid huyết tương là:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Rối loạn tiêu hóa"
        },
        {
          "key": "C",
          "text": "Tiểu ít"
        },
        {
          "key": "D",
          "text": "Suy hô hấp"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_110",
      "index": 110,
      "question": "Chế độ ăn thiếu protein kéo dài có thể gây:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Táo bón"
        },
        {
          "key": "C",
          "text": "Tiểu ít"
        },
        {
          "key": "D",
          "text": "Suy hô hấp"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_111",
      "index": 111,
      "question": "Hậu quả của giảm protid huyết tương, ngoại trừ:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Phù toàn thân"
        },
        {
          "key": "C",
          "text": "Trẻ em chậm lớn"
        },
        {
          "key": "D",
          "text": "Vết thương chậm tái tạo"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_112",
      "index": 112,
      "question": "Giảm protid huyết tương gây phù toàn thân do:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Tăng tính thấm thành mạch"
        },
        {
          "key": "C",
          "text": "Giữ muối và nước"
        },
        {
          "key": "D",
          "text": "Tạo áp lực thẩm thấu"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_113",
      "index": 113,
      "question": "Vai trò của nước trong cơ thể là:",
      "options": [
        {
          "key": "A",
          "text": "Trẻ đang bú nước chiếm 60% trọng lượng cơ thể."
        },
        {
          "key": "B",
          "text": "Trẻ sơ sinh, nước chiếm 70% trọng lượng cơ thể."
        },
        {
          "key": "C",
          "text": "Người trưởng thành nước chiếm 80% trọng lượng cơ thể."
        },
        {
          "key": "D",
          "text": ""
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "q_sinhly_114",
      "index": 114,
      "question": "Vai trò của nước trong cơ thể, ngoại trừ:",
      "options": [
        {
          "key": "A",
          "text": "Nước duy trì khối lượng tuần hoàn"
        },
        {
          "key": "B",
          "text": "Nước là môi trường cho mọi phản ứng hoá học"
        },
        {
          "key": "C",
          "text": "Tham gia điều hoà thân nhiệt"
        },
        {
          "key": "D",
          "text": ""
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "q_sinhly_115",
      "index": 115,
      "question": "Vai trò của nước trong cơ thể, ngoại trừ:",
      "options": [
        {
          "key": "A",
          "text": "Giảm ma sát, sức va chạm cơ học cho các nội tạng"
        },
        {
          "key": "B",
          "text": "Não, tim, gan, thận chứa nhiều nước hơn da, xương, sụn"
        },
        {
          "key": "C",
          "text": "Các cơ quan hoạt động nhiều có tỷ lệ nước cao hơn các cơ quan khác"
        },
        {
          "key": "D",
          "text": ""
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "q_sinhly_116",
      "index": 116,
      "question": "Phân bố nước trong cơ thể:",
      "options": [
        {
          "key": "A",
          "text": "Khu vực trong tế bào, chiếm 60% trọng lượng cơ thể."
        },
        {
          "key": "B",
          "text": ""
        },
        {
          "key": "C",
          "text": "Trong lòng mạch 15% trọng lượng cơ thể."
        },
        {
          "key": "D",
          "text": "Khu vực gian bào 5%. trọng lượng cơ thể."
        }
      ],
      "correctAnswer": "B",
      "explanation": ""
    },
    {
      "id": "q_sinhly_117",
      "index": 117,
      "question": "Phù xuất hiện nhanh nhất",
      "options": [
        {
          "key": "A",
          "text": "Phù do bệnh tim"
        },
        {
          "key": "B",
          "text": "Phù do bệnh thận"
        },
        {
          "key": "C",
          "text": "Phù do bệnh gan"
        },
        {
          "key": "D",
          "text": ""
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "q_sinhly_118",
      "index": 118,
      "question": "Vai trò các chất điện giải trong cơ thể:",
      "options": [
        {
          "key": "A",
          "text": "Quyết định áp lực thủy tĩnh"
        },
        {
          "key": "B",
          "text": ""
        },
        {
          "key": "C",
          "text": "Quyết định áp lực Keo"
        },
        {
          "key": "D",
          "text": "Quyết định áp lực thủy tĩnh và thẩm thấu"
        }
      ],
      "correctAnswer": "B",
      "explanation": ""
    },
    {
      "id": "q_sinhly_119",
      "index": 119,
      "question": "Vai trò các chất điện giải trong cơ thể, ngoại trừ:",
      "options": [
        {
          "key": "A",
          "text": "Tham gia vào các hệ thống đệm"
        },
        {
          "key": "B",
          "text": ""
        },
        {
          "key": "C",
          "text": "Điều chỉnh PH máu"
        },
        {
          "key": "D",
          "text": "Ion Calci tham gia dẫn truyền thần kinh"
        }
      ],
      "correctAnswer": "B",
      "explanation": ""
    },
    {
      "id": "q_sinhly_120",
      "index": 120,
      "question": "Lượng muối (chủ yếu là NaCl) hàng ngày cơ thể cần:",
      "options": [
        {
          "key": "A",
          "text": "&lt; 10g"
        },
        {
          "key": "B",
          "text": ""
        },
        {
          "key": "C",
          "text": "30-50g"
        },
        {
          "key": "D",
          "text": "&gt; 50g"
        }
      ],
      "correctAnswer": "B",
      "explanation": ""
    },
    {
      "id": "q_sinhly_121",
      "index": 121,
      "question": "Calci cần được bổ sung thêm cho các đối tượng, ngoại trừ:",
      "options": [
        {
          "key": "A",
          "text": "Phụ nữ có thai"
        },
        {
          "key": "B",
          "text": ""
        },
        {
          "key": "C",
          "text": "Người cao tuổi"
        },
        {
          "key": "D",
          "text": "Trẻ nhỏ"
        }
      ],
      "correctAnswer": "B",
      "explanation": ""
    },
    {
      "id": "q_sinhly_122",
      "index": 122,
      "question": "Phân bố các chất điện giải trong và ngoài tế bào:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Tổng điện tích khác nhau."
        },
        {
          "key": "C",
          "text": "Protein có nhiều trong gian bào"
        },
        {
          "key": "D",
          "text": "K+, PO4--- có rất nhiều ở gian bào, lòng mạch"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_123",
      "index": 123,
      "question": "Phân bố các chất điện giải trong và ngoài tế bào:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Tổng điện tích khác nhau."
        },
        {
          "key": "C",
          "text": "Na+, Cl- có nhiều trong tế bào"
        },
        {
          "key": "D",
          "text": "K+, PO4--- có rất nhiều ở gian bào, lòng mạch"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_124",
      "index": 124,
      "question": "Trao đổi nước và các chất điện giải giữa gian bào và lòng mạch:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Thành mạch cho nước, không cho chất điện giải qua lại tự do."
        },
        {
          "key": "C",
          "text": "Thành mạch cho các chất có trọng lượng phân tử lớn  (M&gt;68.000) qua lại tự do."
        },
        {
          "key": "D",
          "text": "Hầu như các phân tử protein qua được, nên lượng protein trong lòng mạch bao giờ cũng bằng ở gian bào."
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_125",
      "index": 125,
      "question": "Trao đổi nước và các chất điện giải giữa gian bào và lòng mạch:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Thành mạch cho nước, không cho chất điện giải qua lại tự do."
        },
        {
          "key": "C",
          "text": "Thành mạch cho các chất có trọng lượng phân tử lớn  (M&gt;68.000) qua lại tự do."
        },
        {
          "key": "D",
          "text": "Hầu như các phân tử protein qua được, nên lượng protein trong lòng mạch bao giờ cũng bằng ở gian bào."
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_126",
      "index": 126,
      "question": "Trao đổi nước và các chất điện giải giữa gian bào và lòng mạch:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Áp lực keo của Protein trong lòng mạch vào khoảng 65 mmHg, có tác dụng đẩy nước từ lòng mạch ra gian bào."
        },
        {
          "key": "C",
          "text": "Thành mạch cho các chất có trọng lượng phân tử lớn  (M&gt;68.000) qua lại tự do."
        },
        {
          "key": "D",
          "text": "Hầu như các phân tử protein qua được, nên lượng protein trong lòng mạch bao giờ cũng bằng ở gian bào."
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_127",
      "index": 127,
      "question": "Trao đổi nước và các chất điện giải giữa trong và ngoài tế bào:",
      "options": [
        {
          "key": "A",
          "text": "Màng tế bào cho các ion qua lại tự do"
        },
        {
          "key": "B",
          "text": "Thành phần các chất điện giải giữa hai khu vực này như nhau"
        },
        {
          "key": "C",
          "text": ""
        },
        {
          "key": "D",
          "text": "Tổng điện tích các Ion trong tế bào cao hơn ngoài tế bào"
        }
      ],
      "correctAnswer": "C",
      "explanation": ""
    },
    {
      "id": "q_sinhly_128",
      "index": 128,
      "question": "Trao đổi nước và các chất điện giải giữa trong và ngoài tế bào, ngoại trừ:",
      "options": [
        {
          "key": "A",
          "text": "Màng tế bào không cho các Ion qua lại tự do"
        },
        {
          "key": "B",
          "text": "Thành phần các chất điện giải giữa hai khu vực này khác nhau"
        },
        {
          "key": "C",
          "text": ""
        },
        {
          "key": "D",
          "text": "Nếu xảy ra sự chênh lệch áp lực thẩm thấu thì nước sẽ được trao đổi để điều chỉnh lại"
        }
      ],
      "correctAnswer": "C",
      "explanation": ""
    },
    {
      "id": "q_sinhly_129",
      "index": 129,
      "question": "Trao đổi nước và các chất điện giải giữa trong và ngoài tế bào, ngoại trừ:",
      "options": [
        {
          "key": "A",
          "text": "Màng tế bào không cho các Ion qua lại tự do"
        },
        {
          "key": "B",
          "text": "Khi màng tế bào bị tổn thương sẽ dẫn đến rối loạn thành phần các chất điện giải giữa hai khu vực."
        },
        {
          "key": "C",
          "text": ""
        },
        {
          "key": "D",
          "text": "Nếu xảy ra sự chênh lệch áp lực thẩm thấu thì nước sẽ được trao đổi để điều chỉnh lại"
        }
      ],
      "correctAnswer": "C",
      "explanation": ""
    },
    {
      "id": "q_sinhly_130",
      "index": 130,
      "question": "Mất nước do tiêu chảy cấp:",
      "options": [
        {
          "key": "A",
          "text": "Dịch ruột là dịch toan, chứa nhiều natri, do vậy khi bị tiêu chảy cơ thể nhanh chóng rơi vào tình trạng nhiễm kiềm."
        },
        {
          "key": "B",
          "text": "Tăng bài tiết nước tiểu do máu đến thận tăng"
        },
        {
          "key": "C",
          "text": "Tăng huyết áp bù trừ"
        },
        {
          "key": "D",
          "text": ""
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "q_sinhly_131",
      "index": 131,
      "question": "Trương lực của dạ dày có vai trò gì?",
      "options": [
        {
          "key": "A",
          "text": "Giúp tiêu hóa protid"
        },
        {
          "key": "B",
          "text": ""
        },
        {
          "key": "C",
          "text": "Trung hòa acid dịch vị"
        },
        {
          "key": "D",
          "text": "Ức chế tiết acid"
        }
      ],
      "correctAnswer": "B",
      "explanation": ""
    },
    {
      "id": "q_sinhly_132",
      "index": 132,
      "question": "Một trong các yếu tố nguy cơ gây tăng tiết dịch vị là:",
      "options": [
        {
          "key": "A",
          "text": "Đái tháo đường"
        },
        {
          "key": "B",
          "text": "Nhiễm virus đường ruột"
        },
        {
          "key": "C",
          "text": ""
        },
        {
          "key": "D",
          "text": "Thiếu men lactase"
        }
      ],
      "correctAnswer": "C",
      "explanation": ""
    },
    {
      "id": "q_sinhly_133",
      "index": 133,
      "question": "Hậu quả của giảm co bóp dạ dày thường gặp nhất là:",
      "options": [
        {
          "key": "A",
          "text": "Tiêu chảy cấp"
        },
        {
          "key": "B",
          "text": "Hấp thu vitamin K kém"
        },
        {
          "key": "C",
          "text": ""
        },
        {
          "key": "D",
          "text": "Tăng tiết acid"
        }
      ],
      "correctAnswer": "C",
      "explanation": ""
    },
    {
      "id": "q_sinhly_134",
      "index": 134,
      "question": "Khi giảm tiết dịch mật, hậu quả nào sau đây không đúng?",
      "options": [
        {
          "key": "A",
          "text": "Giảm hấp thu mỡ"
        },
        {
          "key": "B",
          "text": "Giảm hấp thu vitamin tan trong mỡ"
        },
        {
          "key": "C",
          "text": "Dễ chướng hơi"
        },
        {
          "key": "D",
          "text": ""
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "q_sinhly_135",
      "index": 135,
      "question": "Nguyên nhân của giảm tiết dịch tụy thường là:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Nhiễm khuẩn"
        },
        {
          "key": "C",
          "text": "Viêm phúc mạc"
        },
        {
          "key": "D",
          "text": "Loét tá tràng nhẹ"
        },
        {
          "key": "E",
          "text": "coli"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_136",
      "index": 136,
      "question": "Tiêu chảy do rối loạn thẩm thấu xảy ra khi:",
      "options": [
        {
          "key": "A",
          "text": "Tăng mật độ vi khuẩn ở ruột non"
        },
        {
          "key": "B",
          "text": "Tăng tiết nước và điện giải vào lòng ruột"
        },
        {
          "key": "C",
          "text": "Tăng nhu động ruột quá mức"
        },
        {
          "key": "D",
          "text": ""
        }
      ],
      "correctAnswer": "D",
      "explanation": ""
    },
    {
      "id": "q_sinhly_137",
      "index": 137,
      "question": "Biến chứng nặng của tiêu chảy mạn tính là:",
      "options": [
        {
          "key": "A",
          "text": "Suy thận cấp"
        },
        {
          "key": "B",
          "text": ""
        },
        {
          "key": "C",
          "text": "Viêm ruột hoại tử"
        },
        {
          "key": "D",
          "text": "Tăng đường huyết"
        }
      ],
      "correctAnswer": "B",
      "explanation": ""
    },
    {
      "id": "q_sinhly_138",
      "index": 138,
      "question": "Nguyên nhân tắc ruột cơ năng thường gặp nhất là:",
      "options": [
        {
          "key": "A",
          "text": "Dính ruột sau mổ"
        },
        {
          "key": "B",
          "text": ""
        },
        {
          "key": "C",
          "text": "Thoát vị nghẹt"
        },
        {
          "key": "D",
          "text": "Xoắn đại tràng sigma"
        }
      ],
      "correctAnswer": "B",
      "explanation": ""
    },
    {
      "id": "q_sinhly_139",
      "index": 139,
      "question": "Thiếu men lactose bẩm sinh dẫn đến hậu quả gì?",
      "options": [
        {
          "key": "A",
          "text": "Táo bón"
        },
        {
          "key": "B",
          "text": ""
        },
        {
          "key": "C",
          "text": "Tắc ruột"
        },
        {
          "key": "D",
          "text": "Viêm ruột hoại tử"
        }
      ],
      "correctAnswer": "B",
      "explanation": ""
    },
    {
      "id": "q_sinhly_140",
      "index": 140,
      "question": "Một trong các nguyên nhân gây kém hấp thu ngoài ruột là:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Nhiễm ký sinh trùng đường ruột"
        },
        {
          "key": "C",
          "text": "Rối loạn men tiêu đường lactose"
        },
        {
          "key": "D",
          "text": "Cắt đoạn ruột non"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_141",
      "index": 141,
      "question": "Nguyên nhân nào sau đây thường gây tăng co bóp dạ dày?",
      "options": [
        {
          "key": "A",
          "text": "Thiếu enzym tiêu hóa"
        },
        {
          "key": "B",
          "text": ""
        },
        {
          "key": "C",
          "text": "Cắt đoạn ruột"
        },
        {
          "key": "D",
          "text": "Tắc mật"
        }
      ],
      "correctAnswer": "B",
      "explanation": ""
    },
    {
      "id": "q_sinhly_142",
      "index": 142,
      "question": "Khi dạ dày tăng nhu động mạnh, hậu quả thường gặp là:",
      "options": [
        {
          "key": "A",
          "text": "Hấp thu dinh dưỡng tăng"
        },
        {
          "key": "B",
          "text": "Thức ăn bị tồn đọng lâu"
        },
        {
          "key": "C",
          "text": ""
        },
        {
          "key": "D",
          "text": "Nồng độ acid giảm"
        }
      ],
      "correctAnswer": "C",
      "explanation": ""
    },
    {
      "id": "q_sinhly_143",
      "index": 143,
      "question": "Viêm loét dạ dày – tá tràng xảy ra chủ yếu do:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Yếu tố bảo vệ mạnh hơn yếu tố tấn công"
        },
        {
          "key": "C",
          "text": "Thiếu dịch mật"
        },
        {
          "key": "D",
          "text": "Không tiết được enzym tụy"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_144",
      "index": 144,
      "question": "Giảm tiết dịch vị thường gặp trong:",
      "options": [
        {
          "key": "A",
          "text": "Stress kéo dài"
        },
        {
          "key": "B",
          "text": ""
        },
        {
          "key": "C",
          "text": "Nhiễm Helicobacter pylori"
        },
        {
          "key": "D",
          "text": "Tăng tiết gastrin"
        }
      ],
      "correctAnswer": "B",
      "explanation": ""
    },
    {
      "id": "q_sinhly_145",
      "index": 145,
      "question": "Rối loạn tiết dịch ruột thường gây:",
      "options": [
        {
          "key": "A",
          "text": "Tăng hấp thu mỡ"
        },
        {
          "key": "B",
          "text": "Tắc ruột cấp"
        },
        {
          "key": "C",
          "text": ""
        },
        {
          "key": "D",
          "text": "Táo bón nặng"
        }
      ],
      "correctAnswer": "C",
      "explanation": ""
    },
    {
      "id": "q_sinhly_146",
      "index": 146,
      "question": "Nguyên nhân nào sau đây gây tiêu chảy do tổn thương niêm mạc ruột?",
      "options": [
        {
          "key": "A",
          "text": "Uống nhiều nước"
        },
        {
          "key": "B",
          "text": ""
        },
        {
          "key": "C",
          "text": "Ăn nhiều chất béo"
        },
        {
          "key": "D",
          "text": "Thiếu vitamin D"
        }
      ],
      "correctAnswer": "B",
      "explanation": ""
    },
    {
      "id": "q_sinhly_147",
      "index": 147,
      "question": "Hậu quả của tiêu chảy mạn là:",
      "options": [
        {
          "key": "A",
          "text": "Tăng huyết áp"
        },
        {
          "key": "B",
          "text": ""
        },
        {
          "key": "C",
          "text": "Tăng tiết dịch mật"
        },
        {
          "key": "D",
          "text": "Tăng cân"
        }
      ],
      "correctAnswer": "B",
      "explanation": ""
    },
    {
      "id": "q_sinhly_148",
      "index": 148,
      "question": "Tắc ruột cơ học có thể do:",
      "options": [
        {
          "key": "A",
          "text": "Liệt ruột sau phẫu thuật"
        },
        {
          "key": "B",
          "text": "Nhiễm khuẩn huyết"
        },
        {
          "key": "C",
          "text": ""
        },
        {
          "key": "D",
          "text": "Giảm tiết enzym tụy"
        }
      ],
      "correctAnswer": "C",
      "explanation": ""
    },
    {
      "id": "q_sinhly_149",
      "index": 149,
      "question": "Giảm tiết dịch tụy gây hậu quả chính là:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Tăng hấp thu chất béo"
        },
        {
          "key": "C",
          "text": "Tăng tiết dịch mật"
        },
        {
          "key": "D",
          "text": "Giảm tiết acid dạ dày"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    },
    {
      "id": "q_sinhly_150",
      "index": 150,
      "question": "Hội chứng kém hấp thu do loạn khuẩn đường ruột thường xuất hiện khi:",
      "options": [
        {
          "key": "A",
          "text": ""
        },
        {
          "key": "B",
          "text": "Ăn nhiều chất béo"
        },
        {
          "key": "C",
          "text": "Uống ít nước"
        },
        {
          "key": "D",
          "text": "Sử dụng thuốc giảm đau NSAID"
        }
      ],
      "correctAnswer": "A",
      "explanation": ""
    }
  ]
};

const SAMPLE_BANK = {
    id: 'sample_bank_it_fundamentals',
    title: 'Đề cương mẫu: Tin Học & Công Nghệ Thông Tin (15 Câu Chuẩn)',
    createdAt: new Date().toISOString(),
    tags: ['Mẫu', 'Tin học'],
    questions: [
        {
            id: 'sample_q1',
            index: 1,
            question: 'Trong kiến trúc máy tính, CPU là viết tắt của cụm từ nào sau đây?',
            options: [
                { key: 'A', text: 'Central Processing Unit' },
                { key: 'B', text: 'Control Processing Unit' },
                { key: 'C', text: 'Central Performance Utility' },
                { key: 'D', text: 'Computer Personal Unit' }
            ],
            correctAnswer: 'A',
            explanation: 'CPU (Central Processing Unit) là bộ vi xử lý trung tâm, đóng vai trò như bộ não của máy tính.'
        },
        {
            id: 'sample_q2',
            index: 2,
            question: 'Đơn vị nào sau đây dùng để đo dung lượng bộ nhớ máy tính?',
            options: [
                { key: 'A', text: 'Hertz (Hz)' },
                { key: 'B', text: 'Byte' },
                { key: 'C', text: 'Pixel' },
                { key: 'D', text: 'Volt (V)' }
            ],
            correctAnswer: 'B',
            explanation: 'Byte là đơn vị cơ bản dùng để đo dung lượng bộ nhớ (1 Byte = 8 bits). Hertz đo tần số, Pixel đo độ phân giải.'
        },
        {
            id: 'sample_q3',
            index: 3,
            question: 'Bộ nhớ RAM trong máy tính thuộc loại bộ nhớ nào?',
            options: [
                { key: 'A', text: 'Bộ nhớ chỉ đọc, không mất dữ liệu khi mất điện' },
                { key: 'B', text: 'Bộ nhớ lưu trữ ngoài như ổ đĩa HDD/SSD' },
                { key: 'C', text: 'Bộ nhớ truy xuất ngẫu nhiên, mất dữ liệu khi mất điện (Volatile memory)' },
                { key: 'D', text: 'Bộ nhớ quang lưu trữ dữ liệu vĩnh viễn' }
            ],
            correctAnswer: 'C',
            explanation: 'RAM (Random Access Memory) là bộ nhớ truy xuất ngẫu nhiên tạm thời, dữ liệu sẽ mất đi khi ngắt nguồn điện.'
        },
        {
            id: 'sample_q4',
            index: 4,
            question: 'Phím tắt nào thường được dùng để dán (Paste) nội dung vừa sao chép trong hệ điều hành Windows?',
            options: [
                { key: 'A', text: 'Ctrl + C' },
                { key: 'B', text: 'Ctrl + X' },
                { key: 'C', text: 'Ctrl + V' },
                { key: 'D', text: 'Ctrl + Z' }
            ],
            correctAnswer: 'C',
            explanation: 'Ctrl + C để Copy, Ctrl + X để Cut, Ctrl + V để Paste, Ctrl + Z để Undo.'
        },
        {
            id: 'sample_q5',
            index: 5,
            question: 'Giao thức nào được sử dụng để truyền tải dữ liệu trang web bảo mật có mã hóa?',
            options: [
                { key: 'A', text: 'HTTP' },
                { key: 'B', text: 'FTP' },
                { key: 'C', text: 'HTTPS' },
                { key: 'D', text: 'SMTP' }
            ],
            correctAnswer: 'C',
            explanation: 'HTTPS (Hypertext Transfer Protocol Secure) sử dụng chứng chỉ SSL/TLS để mã hóa dữ liệu giữa trình duyệt và máy chủ.'
        },
        {
            id: 'sample_q6',
            index: 6,
            question: 'Hệ điều hành nào sau đây là hệ điều hành mã nguồn mở?',
            options: [
                { key: 'A', text: 'Microsoft Windows 11' },
                { key: 'B', text: 'Linux' },
                { key: 'C', text: 'Apple macOS' },
                { key: 'D', text: 'Apple iOS' }
            ],
            correctAnswer: 'B',
            explanation: 'Linux là hệ điều hành mã nguồn mở tự do được phát triển bởi cộng đồng toàn cầu khởi xướng bởi Linus Torvalds.'
        },
        {
            id: 'sample_q7',
            index: 7,
            question: 'Trong bảng tính Excel, hàm nào dùng để tính tổng các giá trị trong một dải ô?',
            options: [
                { key: 'A', text: 'AVERAGE' },
                { key: 'B', text: 'SUM' },
                { key: 'C', text: 'COUNT' },
                { key: 'D', text: 'MAX' }
            ],
            correctAnswer: 'B',
            explanation: 'Hàm =SUM(dải_ô) dùng để tính tổng; AVERAGE tính trung bình, COUNT đếm số ô chứa số.'
        },
        {
            id: 'sample_q8',
            index: 8,
            question: 'Địa chỉ IPv4 chuẩn bao gồm bao nhiêu bit?',
            options: [
                { key: 'A', text: '16 bit' },
                { key: 'B', text: '32 bit' },
                { key: 'C', text: '64 bit' },
                { key: 'D', text: '128 bit' }
            ],
            correctAnswer: 'B',
            explanation: 'IPv4 gồm 32 bit (chia thành 4 octet 8 bit, ví dụ: 192.168.1.1). IPv6 bao gồm 128 bit.'
        },
        {
            id: 'sample_q9',
            index: 9,
            question: 'Định dạng tệp nào sau đây thường là tệp nén dữ liệu?',
            options: [
                { key: 'A', text: '.zip hoặc .rar' },
                { key: 'B', text: '.docx' },
                { key: 'C', text: '.mp3' },
                { key: 'D', text: '.pdf' }
            ],
            correctAnswer: 'A',
            explanation: '.zip, .rar, .7z là các định dạng đóng gói và nén dữ liệu phổ biến.'
        },
        {
            id: 'sample_q10',
            index: 10,
            question: 'Tường lửa (Firewall) trong mạng máy tính có chức năng chính là gì?',
            options: [
                { key: 'A', text: 'Tăng tốc độ truy cập Internet' },
                { key: 'B', text: 'Diệt tất cả các loại virus đã xâm nhập máy tính' },
                { key: 'C', text: 'Kiểm soát và ngăn chặn các luồng dữ liệu mạng trái phép ra/vào hệ thống' },
                { key: 'D', text: 'Sao lưu tự động toàn bộ dữ liệu máy chủ' }
            ],
            correctAnswer: 'C',
            explanation: 'Tường lửa hoạt động như hàng rào bảo vệ, giám sát và lọc lưu lượng mạng vào ra dựa trên các quy tắc bảo mật xác định.'
        },
        {
            id: 'sample_q11',
            index: 11,
            question: 'Đâu KHÔNG phải là một trình duyệt web phổ biến?',
            options: [
                { key: 'A', text: 'Google Chrome' },
                { key: 'B', text: 'Mozilla Firefox' },
                { key: 'C', text: 'Microsoft Edge' },
                { key: 'D', text: 'Adobe Photoshop' }
            ],
            correctAnswer: 'D',
            explanation: 'Adobe Photoshop là phần mềm chỉnh sửa ảnh chuyên nghiệp, không phải trình duyệt web.'
        },
        {
            id: 'sample_q12',
            index: 12,
            question: 'Thuật toán tìm kiếm nhị phân (Binary Search) yêu cầu dãy đầu vào phải có điều kiện gì?',
            options: [
                { key: 'A', text: 'Số phần tử phải là số chẵn' },
                { key: 'B', text: 'Dãy đã được sắp xếp theo thứ tự' },
                { key: 'C', text: 'Tất cả phần tử phải là số nguyên dương' },
                { key: 'D', text: 'Dãy không được chứa phần tử trùng nhau' }
            ],
            correctAnswer: 'B',
            explanation: 'Tìm kiếm nhị phân chia đôi phạm vi tìm kiếm mỗi bước, do đó bắt buộc dãy phải được sắp xếp trước (tăng dần hoặc giảm dần).'
        },
        {
            id: 'sample_q13',
            index: 13,
            question: 'Trong HTML, thẻ nào được dùng để tạo một liên kết (hyperlink)?',
            options: [
                { key: 'A', text: '<link>' },
                { key: 'B', text: '<href>' },
                { key: 'C', text: '<a>' },
                { key: 'D', text: '<url>' }
            ],
            correctAnswer: 'C',
            explanation: 'Thẻ <a href="...">...</a> (anchor) được dùng để định nghĩa một liên kết trong HTML.'
        },
        {
            id: 'sample_q14',
            index: 14,
            question: 'Hiện tượng "Phishing" trong bảo mật an ninh mạng đề cập đến điều gì?',
            options: [
                { key: 'A', text: 'Tấn công từ chối dịch vụ phân tán' },
                { key: 'B', text: 'Hình thức giả mạo tổ chức uy tín qua email/web giả để đánh cắp thông tin nhạy cảm' },
                { key: 'C', text: 'Cài mã độc mã hóa đòi tiền chuộc vào ổ cứng' },
                { key: 'D', text: 'Nghe trộm sóng Wifi nơi công cộng' }
            ],
            correctAnswer: 'B',
            explanation: 'Phishing (tấn công giả mạo) lừa người dùng nhấp vào link giả mạo ngân hàng hoặc tài khoản để lấy cắp mật khẩu, mã OTP.'
        },
        {
            id: 'sample_q15',
            index: 15,
            question: 'Công nghệ điện toán đám mây (Cloud Computing) mang lại lợi ích chính nào?',
            options: [
                { key: 'A', text: 'Chỉ có thể dùng khi máy tính kết nối dây LAN' },
                { key: 'B', text: 'Bắt buộc người dùng phải tự bảo trì máy chủ vật lý' },
                { key: 'C', text: 'Truy cập tài nguyên phần mềm, lưu trữ linh hoạt qua Internet mà không cần đầu tư máy chủ vật lý lớn' },
                { key: 'D', text: 'Không bao giờ gặp sự cố gián đoạn dịch vụ' }
            ],
            correctAnswer: 'C',
            explanation: 'Điện toán đám mây cung cấp khả năng mở rộng tài nguyên tính toán và lưu trữ theo nhu cầu thông qua Internet với chi phí tối ưu.'
        }
    ]
};

// ===================================================================
// APP CONTROLLER & STATE MANAGEMENT
// ===================================================================
class QuizApp {
    constructor() {
        this.banks = [];
        this.selectedBankIds = new Set();
        this.tempImportedQuestions = [];
        this.currentEditingBankId = null;

        // Trạng thái Ôn Tập
        this.study = {
            activeBankId: 'all',
            questions: [],
            answers: {},      // qId -> { selectedKey, isCorrect }
            starred: new Set(),// qId set
            filter: 'all',    // 'all' | 'unanswered' | 'wrong' | 'starred'
            viewMode: 'list', // 'list' | 'flashcard'
            flashcardIndex: 0
        };

        // Trạng thái Thi Thử
        this.exam = {
            selectedBankIds: [],
            questions: [],
            currentIndex: 0,
            answers: {},      // questionIndex -> selectedKey
            flags: new Set(), // questionIndex set
            timeTotalMinutes: 30,
            timeRemainingSeconds: 0,
            timerHandle: null,
            startTime: null,
            isFinished: false
        };

        // Lịch sử thi
        this.history = [];

        this.init();
    }

    init() {
        this.loadStorage();
        this.initTheme();
        this.bindEvents();
        this.renderBankList();
        this.updateHeaderStats();
    }

    // ===============================================================
    // STORAGE & PERSISTENCE (SHARED REST API + LOCAL FALLBACK)
    // ===============================================================
    async loadStorage() {
        let loadedFromServer = false;
        try {
            const res = await fetch('/api/banks');
            if (res.ok) {
                const serverBanks = await res.json();
                if (Array.isArray(serverBanks) && serverBanks.length > 0) {
                    this.banks = serverBanks;
                    loadedFromServer = true;
                }
            }
        } catch (e) {
            console.log('Không kết nối được server API, dùng local:', e);
        }

        if (!loadedFromServer || this.banks.length === 0) {
            const savedBanks = localStorage.getItem('quizmaster_banks');
            if (savedBanks) {
                this.banks = JSON.parse(savedBanks);
            } else {
                this.banks = [KNGT_BANK, SAMPLE_BANK];
            }
        }

        // Đảm bảo bộ đề 150 câu chuẩn luôn có mặt
        const existingIdx = this.banks.findIndex(b => b.id === 'bank_kngt_gdsk_150_official');
        if (existingIdx !== -1) {
            this.banks[existingIdx] = KNGT_BANK;
        } else {
            this.banks.unshift(KNGT_BANK);
        }
        this.saveBanks();

        const savedHistory = localStorage.getItem('quizmaster_history');
        if (savedHistory) {
            this.history = JSON.parse(savedHistory);
        }

        const savedStarred = localStorage.getItem('quizmaster_starred');
        if (savedStarred) {
            this.study.starred = new Set(JSON.parse(savedStarred));
        }

        this.selectedBankIds = new Set(this.banks.map(b => b.id));
        this.renderBankList();
        this.fetchNetworkInfo();
    }

    async fetchNetworkInfo() {
        const shareText = document.getElementById('share-lan-text');
        const shareBtn = document.getElementById('btn-share-lan');

        // Tự động nhận diện nếu chạy trên GitHub Pages hoặc tên miền công cộng
        if (window.location.hostname.includes('github.io') || (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1')) {
            if (shareText) {
                shareText.innerHTML = '<i class="fa-solid fa-share-nodes"></i> Chia sẻ web ôn thi';
            }
            if (shareBtn) {
                shareBtn.onclick = () => {
                    navigator.clipboard.writeText(window.location.href).then(() => {
                        this.showToast('Đã sao chép link web! Gửi link này cho bạn bè để cùng vào ôn thi trực tuyến nhé!', 'success');
                    }).catch(() => {
                        prompt('Copy link này để gửi cho bạn bè:', window.location.href);
                    });
                };
            }
            return;
        }

        try {
            const res = await fetch('/api/info');
            if (res.ok) {
                const info = await res.json();
                if (shareText && info.shareUrl) {
                    shareText.textContent = `Chia sẻ LAN: ${info.shareUrl}`;
                    if (shareBtn) {
                        shareBtn.onclick = () => {
                            navigator.clipboard.writeText(info.shareUrl).then(() => {
                                this.showToast(`Đã sao chép: ${info.shareUrl} - Gửi link này để máy khác cùng mạng Wi-Fi vào ôn thi!`, 'success');
                            }).catch(() => {
                                prompt('Copy link này để máy khác truy cập:', info.shareUrl);
                            });
                        };
                    }
                }
            }
        } catch (e) {
            if (shareBtn) shareBtn.style.display = 'none';
        }
    }

    saveBanks() {
        try {
            localStorage.setItem('quizmaster_banks', JSON.stringify(this.banks));
            this.updateHeaderStats();

            // Đồng bộ bộ đề lên máy chủ để các máy khác cùng thấy
            if (this.banks && this.banks.length > 0) {
                this.banks.forEach(bank => {
                    fetch('/api/banks', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(bank)
                    }).catch(() => {});
                });
            }
        } catch (e) {
            console.error('Lỗi khi lưu câu hỏi vào LocalStorage:', e);
        }
    }

    saveHistory() {
        try {
            localStorage.setItem('quizmaster_history', JSON.stringify(this.history));
        } catch (e) {
            console.error('Lỗi lưu lịch sử:', e);
        }
    }

    saveStarred() {
        try {
            localStorage.setItem('quizmaster_starred', JSON.stringify(Array.from(this.study.starred)));
        } catch (e) {
            console.error('Lỗi lưu đánh dấu sao:', e);
        }
    }

    // ===============================================================
    // THEME & UTILITIES
    // ===============================================================
    initTheme() {
        const savedTheme = localStorage.getItem('quizmaster_theme') || 'dark';
        document.documentElement.setAttribute('data-theme', savedTheme);
        this.updateThemeIcon(savedTheme);
    }

    toggleTheme() {
        const current = document.documentElement.getAttribute('data-theme');
        const target = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', target);
        localStorage.setItem('quizmaster_theme', target);
        this.updateThemeIcon(target);
    }

    updateThemeIcon(theme) {
        const btn = document.getElementById('btn-theme-toggle');
        if (!btn) return;
        btn.innerHTML = theme === 'dark' ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
    }

    showToast(message, type = 'info') {
        const container = document.getElementById('toast-container');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        
        let icon = 'fa-circle-info';
        if (type === 'success') icon = 'fa-circle-check';
        if (type === 'error') icon = 'fa-triangle-exclamation';

        toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
        container.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(100%)';
            setTimeout(() => toast.remove(), 300);
        }, 3200);
    }

    updateHeaderStats() {
        const badgeCount = document.getElementById('badge-bank-count');
        if (badgeCount) badgeCount.textContent = this.banks.length;
    }

    // ===============================================================
    // EVENT BINDINGS
    // ===============================================================
    bindEvents() {
        // Theme toggle
        document.getElementById('btn-theme-toggle')?.addEventListener('click', () => this.toggleTheme());

        // Tab Navigation
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const tabTarget = btn.getAttribute('data-tab');
                this.switchTab(tabTarget);
            });
        });

        // Backup Export / Import
        document.getElementById('btn-export-backup')?.addEventListener('click', () => this.exportBackupJSON());

        // Bank Manager Events
        document.getElementById('select-all-banks')?.addEventListener('change', (e) => {
            if (e.target.checked) {
                this.selectedBankIds = new Set(this.banks.map(b => b.id));
            } else {
                this.selectedBankIds.clear();
            }
            this.renderBankList();
        });

        document.getElementById('bank-search-input')?.addEventListener('input', (e) => {
            this.renderBankList(e.target.value);
        });

        document.getElementById('btn-quick-study-selected')?.addEventListener('click', () => {
            if (this.selectedBankIds.size === 0) {
                this.showToast('Vui lòng chọn ít nhất 1 bộ đề để ôn tập!', 'error');
                return;
            }
            this.switchTab('tab-study');
        });

        document.getElementById('btn-quick-exam-selected')?.addEventListener('click', () => {
            if (this.selectedBankIds.size === 0) {
                this.showToast('Vui lòng chọn ít nhất 1 bộ đề để thi thử!', 'error');
                return;
            }
            this.switchTab('tab-exam');
        });

        // Import Modal Events
        this.bindImportModalEvents();

        // Edit Bank Modal Events
        this.bindEditBankModalEvents();

        // Study Mode Events
        this.bindStudyEvents();

        // Exam Mode Events
        this.bindExamEvents();

        // History Events
        document.getElementById('btn-clear-history')?.addEventListener('click', () => {
            if (confirm('Bạn có chắc chắn muốn xóa toàn bộ lịch sử các lần thi thử không?')) {
                this.history = [];
                this.saveHistory();
                this.renderHistory();
                this.showToast('Đã xóa toàn bộ lịch sử thi!', 'success');
            }
        });
    }

    switchTab(tabId) {
        document.querySelectorAll('.nav-tabs .tab-btn').forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-tab') === tabId);
        });

        document.querySelectorAll('.tab-content').forEach(c => {
            c.classList.toggle('active', c.id === tabId);
        });

        if (tabId === 'tab-study') {
            this.setupStudyMode();
        } else if (tabId === 'tab-exam') {
            this.setupExamScreen();
        } else if (tabId === 'tab-history') {
            this.renderHistory();
        }
    }

    // ===============================================================
    // TAB 1: THƯ VIỆN ĐỀ CƯƠNG
    // ===============================================================
    renderBankList(searchQuery = '') {
        const grid = document.getElementById('bank-grid');
        const emptyState = document.getElementById('bank-empty-state');
        const selectAllBox = document.getElementById('select-all-banks');
        const selectedCount = document.getElementById('selected-banks-count');

        if (!grid) return;

        let filtered = this.banks;
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase().trim();
            filtered = this.banks.filter(b => b.title.toLowerCase().includes(query));
        }

        if (this.banks.length === 0) {
            grid.innerHTML = '';
            emptyState.style.display = 'block';
            if (selectAllBox) selectAllBox.checked = false;
            if (selectedCount) selectedCount.textContent = '0';
            return;
        }

        emptyState.style.display = 'none';
        if (selectedCount) selectedCount.textContent = this.selectedBankIds.size;
        if (selectAllBox) {
            selectAllBox.checked = this.selectedBankIds.size === this.banks.length && this.banks.length > 0;
        }

        grid.innerHTML = filtered.map(bank => {
            const isChecked = this.selectedBankIds.has(bank.id);
            const dateStr = new Date(bank.createdAt).toLocaleDateString('vi-VN');
            const totalQuestions = bank.questions ? bank.questions.length : 0;

            return `
                <div class="bank-card ${isChecked ? 'selected' : ''}" data-id="${bank.id}">
                    <div>
                        <div class="bank-card-header">
                            <div class="bank-title-group">
                                <input type="checkbox" class="custom-checkbox bank-card-checkbox" data-id="${bank.id}" ${isChecked ? 'checked' : ''}>
                                <h3 class="bank-title">${this.escapeHTML(bank.title)}</h3>
                            </div>
                        </div>
                        <div class="bank-meta">
                            <span class="bank-pill pill-count">
                                <i class="fa-solid fa-list-check"></i> ${totalQuestions} câu hỏi
                            </span>
                            <span class="bank-pill pill-date">
                                <i class="fa-regular fa-calendar"></i> ${dateStr}
                            </span>
                        </div>
                    </div>

                    <div class="bank-card-actions">
                        <button class="btn btn-secondary btn-inspect-bank" data-id="${bank.id}" title="Xem và sửa toàn bộ câu hỏi" style="flex: 1; font-size: 13px;">
                            <i class="fa-solid fa-eye"></i> Xem (${totalQuestions})
                        </button>
                        <button class="btn btn-primary btn-study-bank" data-id="${bank.id}" title="Ôn tập bộ đề này" style="flex: 1; font-size: 13px;">
                            <i class="fa-solid fa-book-open"></i> Ôn tập
                        </button>
                        <button class="btn btn-icon btn-export-single" data-id="${bank.id}" title="Xuất file JSON bộ đề này">
                            <i class="fa-solid fa-file-export"></i>
                        </button>
                        <button class="btn btn-icon btn-outline-danger btn-delete-bank" data-id="${bank.id}" title="Xóa bộ đề này">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </div>
            `;
        }).join('');

        // Gắn sự kiện cho các nút trong thẻ bank
        grid.querySelectorAll('.bank-card-checkbox').forEach(cb => {
            cb.addEventListener('change', (e) => {
                const id = e.target.getAttribute('data-id');
                if (e.target.checked) {
                    this.selectedBankIds.add(id);
                } else {
                    this.selectedBankIds.delete(id);
                }
                this.renderBankList(searchQuery);
            });
        });

        grid.querySelectorAll('.btn-inspect-bank').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.getAttribute('data-id');
                this.openEditBankModal(id);
            });
        });

        grid.querySelectorAll('.btn-study-bank').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.getAttribute('data-id');
                this.study.activeBankId = id;
                this.switchTab('tab-study');
            });
        });

        grid.querySelectorAll('.btn-export-single').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.getAttribute('data-id');
                this.exportSingleBank(id);
            });
        });

        grid.querySelectorAll('.btn-delete-bank').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.getAttribute('data-id');
                this.deleteBank(id);
            });
        });
    }

    deleteBank(id) {
        const bank = this.banks.find(b => b.id === id);
        if (!bank) return;

        if (confirm(`Bạn có chắc chắn muốn xóa bộ đề: "${bank.title}" không? Hành động này không thể hoàn tác.`)) {
            this.banks = this.banks.filter(b => b.id !== id);
            this.selectedBankIds.delete(id);
            this.saveBanks();
            this.renderBankList();

            // Đồng bộ xóa trên máy chủ
            fetch(`/api/banks?id=${encodeURIComponent(id)}`, { method: 'DELETE' }).catch(() => {});

            this.showToast('Đã xóa bộ đề cương thành công!', 'success');
        }
    }

    exportSingleBank(id) {
        const bank = this.banks.find(b => b.id === id);
        if (!bank) return;

        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(bank, null, 2));
        const downloadAnchor = document.createElement('a');
        downloadAnchor.setAttribute("href", dataStr);
        downloadAnchor.setAttribute("download", `${bank.title.replace(/[^a-z0-9]/gi, '_')}.json`);
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();
        this.showToast('Đã tải xuống file đề thi!', 'success');
    }

    exportBackupJSON() {
        const backupData = {
            exportDate: new Date().toISOString(),
            version: '1.0',
            banks: this.banks,
            history: this.history
        };

        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backupData, null, 2));
        const downloadAnchor = document.createElement('a');
        downloadAnchor.setAttribute("href", dataStr);
        downloadAnchor.setAttribute("download", `QuizMaster_Backup_${new Date().toISOString().slice(0, 10)}.json`);
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();
        this.showToast('Đã xuất toàn bộ dữ liệu sao lưu thành công!', 'success');
    }

    // ===============================================================
    // IMPORT MODAL & PARSER PREVIEW
    // Đảm bảo không cắt giảm câu hỏi và chuẩn xác 100% nội dung
    // ===============================================================
    bindImportModalEvents() {
        const modal = document.getElementById('modal-import');
        const openBtn = document.getElementById('btn-open-import');
        const closeBtn = document.getElementById('btn-close-import-modal');
        const cancelBtn = document.getElementById('btn-cancel-import');
        const saveBtn = document.getElementById('btn-save-bank-confirm');

        openBtn?.addEventListener('click', () => {
            this.tempImportedQuestions = [];
            document.getElementById('import-bank-title').value = '';
            document.getElementById('import-textarea-content').value = '';
            document.getElementById('import-preview-container').style.display = 'none';
            document.getElementById('btn-save-bank-confirm').disabled = true;
            modal.classList.add('active');
        });

        const closeModal = () => modal.classList.remove('active');
        closeBtn?.addEventListener('click', closeModal);
        cancelBtn?.addEventListener('click', closeModal);

        // Switch between File Upload & Paste Text tabs
        const tabFile = document.getElementById('tab-import-file');
        const tabText = document.getElementById('tab-import-text');
        const panelFile = document.getElementById('panel-import-file');
        const panelText = document.getElementById('panel-import-text');

        tabFile?.addEventListener('click', () => {
            tabFile.classList.add('active');
            tabText.classList.remove('active');
            panelFile.style.display = 'block';
            panelText.style.display = 'none';
        });

        tabText?.addEventListener('click', () => {
            tabText.classList.add('active');
            tabFile.classList.remove('active');
            panelText.style.display = 'block';
            panelFile.style.display = 'none';
        });

        // Dropzone & File Input
        const dropzone = document.getElementById('file-dropzone');
        const fileInput = document.getElementById('file-input-upload');

        dropzone?.addEventListener('click', () => fileInput.click());

        dropzone?.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropzone.classList.add('dragover');
        });

        dropzone?.addEventListener('dragleave', () => dropzone.classList.remove('dragover'));

        dropzone?.addEventListener('drop', (e) => {
            e.preventDefault();
            dropzone.classList.remove('dragover');
            if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
                this.processUploadedFile(e.dataTransfer.files[0]);
            }
        });

        fileInput?.addEventListener('change', (e) => {
            if (e.target.files && e.target.files.length > 0) {
                this.processUploadedFile(e.target.files[0]);
            }
        });

        // Parse Text button
        document.getElementById('btn-parse-text-now')?.addEventListener('click', () => {
            const text = document.getElementById('import-textarea-content').value;
            if (!text.trim()) {
                this.showToast('Vui lòng dán nội dung câu hỏi trước khi phân tích!', 'error');
                return;
            }
            const questions = QuizParser.parseText(text);
            this.handleParsedQuestions(questions, 'Đề thi trắc nghiệm');
        });

        // Save imported bank
        saveBtn?.addEventListener('click', () => {
            if (this.tempImportedQuestions.length === 0) {
                this.showToast('Chưa có câu hỏi nào được nhận diện!', 'error');
                return;
            }

            let title = document.getElementById('import-bank-title').value.trim();
            if (!title) {
                title = `Bộ đề cương ${new Date().toLocaleDateString('vi-VN')} (${this.tempImportedQuestions.length} câu)`;
            }

            const newBank = {
                id: 'bank_' + Date.now(),
                title: title,
                createdAt: new Date().toISOString(),
                questions: this.tempImportedQuestions
            };

            this.banks.unshift(newBank);
            this.selectedBankIds.add(newBank.id);
            this.saveBanks();
            this.renderBankList();
            closeModal();
            this.showToast(`Đã thêm thành công bộ đề "${title}" với ${newBank.questions.length} câu hỏi!`, 'success');
        });
    }

    async processUploadedFile(file) {
        const titleInput = document.getElementById('import-bank-title');
        if (!titleInput.value.trim()) {
            // Tự động đặt tên theo tên file (bỏ đuôi mở rộng)
            const baseName = file.name.replace(/\.[^/.]+$/, "");
            titleInput.value = baseName;
        }

        this.showToast(`Đang phân tích file "${file.name}"...`, 'info');

        try {
            const ext = file.name.split('.').pop().toLowerCase();
            const arrayBuffer = await file.arrayBuffer();

            // 1. ƯU TIÊN GỬI LÊN SERVER: Tự động giải mã Word .doc/.docx, nhận diện chữ đỏ và gạch chân chuẩn 100%
            try {
                let uploadUrl = '/api/upload';
                if (window.location.protocol === 'file:') {
                    uploadUrl = 'http://localhost:8080/api/upload';
                }
                const res = await fetch(uploadUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/octet-stream',
                        'X-Filename': encodeURIComponent(file.name)
                    },
                    body: arrayBuffer
                });

                if (res.ok) {
                    const result = await res.json();
                    if (result.success && result.bank && result.bank.questions && result.bank.questions.length > 0) {
                        this.handleParsedQuestions(result.bank.questions, file.name);
                        return;
                    }
                }
            } catch (serverErr) {
                console.warn('Server upload không phản hồi, chuyển sang phân tích tại trình duyệt:', serverErr);
            }

            // 2. DỰ PHÒNG TRÌNH DUYỆT (Client-side Fallback)
            if (ext === 'docx') {
                const questions = await QuizParser.parseDocx(arrayBuffer);
                this.handleParsedQuestions(questions, file.name);
            } else if (ext === 'doc') {
                const questions = QuizParser.parseDocBinary(arrayBuffer);
                this.handleParsedQuestions(questions, file.name);
            } else if (ext === 'xlsx' || ext === 'csv') {
                const workbook = XLSX.read(arrayBuffer, { type: 'array' });
                const questions = QuizParser.parseExcel(workbook);
                this.handleParsedQuestions(questions, file.name);
            } else if (ext === 'json') {
                // Đọc file JSON (sao lưu hoặc import đề)
                const text = await file.text();
                const parsed = JSON.parse(text);
                if (Array.isArray(parsed)) {
                    this.handleParsedQuestions(parsed, file.name);
                } else if (parsed.questions && Array.isArray(parsed.questions)) {
                    this.handleParsedQuestions(parsed.questions, parsed.title || file.name);
                } else if (parsed.banks && Array.isArray(parsed.banks)) {
                    // Backup file gồm nhiều bank
                    this.banks.push(...parsed.banks);
                    this.saveBanks();
                    this.renderBankList();
                    document.getElementById('modal-import').classList.remove('active');
                    this.showToast(`Đã khôi phục thành công ${parsed.banks.length} bộ đề!`, 'success');
                    return;
                }
            } else {
                // File Text (.txt) hoặc định dạng text khác
                const text = await file.text();
                const questions = QuizParser.parseText(text);
                this.handleParsedQuestions(questions, file.name);
            }
        } catch (err) {
            console.error('Lỗi khi phân tích file:', err);
            this.showToast(`Không thể đọc file: ${err.message}`, 'error');
        }
    }

    handleParsedQuestions(questions, sourceName) {
        if (!questions || questions.length === 0) {
            this.showToast('Không nhận diện được câu hỏi nào từ file. Hãy kiểm tra định dạng câu hỏi (Ví dụ: Câu 1: A. B. C. D.)', 'error');
            return;
        }

        this.tempImportedQuestions = questions;

        const previewContainer = document.getElementById('import-preview-container');
        const previewCount = document.getElementById('preview-q-count');
        const previewWarning = document.getElementById('preview-q-warning');
        const previewList = document.getElementById('import-preview-list');
        const saveBtn = document.getElementById('btn-save-bank-confirm');

        previewCount.textContent = questions.length;
        previewContainer.style.display = 'block';
        saveBtn.disabled = false;

        let missingAnsCount = 0;

        previewList.innerHTML = questions.map((q, idx) => {
            if (!q.correctAnswer) missingAnsCount++;

            return `
                <div class="preview-item">
                    <div class="preview-q-title">
                        <span style="color: var(--primary);">Câu ${idx + 1}:</span> ${this.escapeHTML(q.question)}
                    </div>
                    <div class="preview-opts">
                        ${q.options.map(opt => `
                            <div class="preview-opt ${opt.key === q.correctAnswer ? 'is-ans' : ''}">
                                <strong>${opt.key}.</strong> ${this.escapeHTML(opt.text)}
                                ${opt.key === q.correctAnswer ? '<i class="fa-solid fa-check"></i>' : ''}
                            </div>
                        `).join('')}
                    </div>
                    <div style="margin-top: 6px; font-size: 12px; display: flex; align-items: center; gap: 8px;">
                        <span>Đáp án đúng:</span>
                        <select class="form-select preview-ans-selector" data-q-index="${idx}" style="padding: 2px 8px; width: auto; font-size: 12px;">
                            <option value="">-- Chưa chọn --</option>
                            ${q.options.map(opt => `
                                <option value="${opt.key}" ${opt.key === q.correctAnswer ? 'selected' : ''}>${opt.key}</option>
                            `).join('')}
                        </select>
                        ${q.explanation ? `<span style="color: var(--text-muted);">(Có giải thích)</span>` : ''}
                    </div>
                </div>
            `;
        }).join('');

        if (missingAnsCount > 0) {
            previewWarning.style.display = 'inline';
            previewWarning.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Có ${missingAnsCount} câu chưa nhận diện được đáp án đúng (bạn có thể chọn trực tiếp ở trên).`;
        } else {
            previewWarning.style.display = 'none';
        }

        // Bắt sự kiện người dùng chọn sửa đáp án trực tiếp trong preview
        previewList.querySelectorAll('.preview-ans-selector').forEach(sel => {
            sel.addEventListener('change', (e) => {
                const qIdx = parseInt(e.target.getAttribute('data-q-index'), 10);
                this.tempImportedQuestions[qIdx].correctAnswer = e.target.value || null;
            });
        });

        this.showToast(`Đã nhận diện thành công ${questions.length} câu hỏi từ ${sourceName}!`, 'success');
    }

    // ===============================================================
    // MODAL: XEM & CHỈNH SỬA TOÀN BỘ CÂU HỎI TRONG BỘ ĐỀ
    // ===============================================================
    bindEditBankModalEvents() {
        const modal = document.getElementById('modal-edit-bank');
        const closeBtn = document.getElementById('btn-close-edit-bank-modal');
        const closeBottomBtn = document.getElementById('btn-close-edit-bank');
        const saveBtn = document.getElementById('btn-save-edited-bank');
        const addQBtn = document.getElementById('btn-add-new-question-to-bank');

        const closeModal = () => modal.classList.remove('active');
        closeBtn?.addEventListener('click', closeModal);
        closeBottomBtn?.addEventListener('click', closeModal);

        saveBtn?.addEventListener('click', () => {
            this.saveEditedBank();
        });

        addQBtn?.addEventListener('click', () => {
            if (!this.currentEditingBankId) return;
            const bank = this.banks.find(b => b.id === this.currentEditingBankId);
            if (!bank) return;

            const newQ = {
                id: 'q_' + Date.now(),
                index: bank.questions.length + 1,
                question: 'Nội dung câu hỏi mới',
                options: [
                    { key: 'A', text: 'Phương án A' },
                    { key: 'B', text: 'Phương án B' },
                    { key: 'C', text: 'Phương án C' },
                    { key: 'D', text: 'Phương án D' }
                ],
                correctAnswer: 'A',
                explanation: ''
            };

            bank.questions.push(newQ);
            this.renderEditBankQuestions(bank);
            this.showToast('Đã thêm 1 câu hỏi mới vào cuối danh sách!', 'info');
        });
    }

    openEditBankModal(bankId) {
        this.currentEditingBankId = bankId;
        const bank = this.banks.find(b => b.id === bankId);
        if (!bank) return;

        const modal = document.getElementById('modal-edit-bank');
        document.getElementById('edit-bank-modal-title').innerHTML = `
            <i class="fa-solid fa-pen-to-square" style="color: var(--primary); margin-right: 8px;"></i>
            Chi Tiết Đề: ${this.escapeHTML(bank.title)}
        `;
        document.getElementById('edit-bank-total-info').textContent = `Tổng: ${bank.questions.length} câu hỏi`;

        this.renderEditBankQuestions(bank);
        modal.classList.add('active');
    }

    renderEditBankQuestions(bank) {
        const container = document.getElementById('edit-bank-questions-list');
        if (!container) return;

        container.innerHTML = bank.questions.map((q, idx) => `
            <div class="study-question-card" style="margin-bottom: 14px; padding: 18px;" data-q-index="${idx}">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                    <span class="question-badge">Câu ${idx + 1}</span>
                    <button class="btn btn-outline-danger btn-delete-q" data-q-index="${idx}" style="padding: 4px 8px; font-size: 12px;">
                        <i class="fa-solid fa-trash"></i> Xóa câu này
                    </button>
                </div>
                <div class="form-group" style="margin-bottom: 10px;">
                    <label class="form-label" style="font-size: 12px;">Nội dung câu hỏi:</label>
                    <textarea class="form-textarea edit-q-text" data-q-index="${idx}" style="min-height: 60px;">${this.escapeHTML(q.question)}</textarea>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 10px;">
                    ${q.options.map((opt, oIdx) => `
                        <div>
                            <span style="font-weight: 700; font-size: 13px;">${opt.key}:</span>
                            <input type="text" class="form-input edit-opt-text" data-q-index="${idx}" data-opt-key="${opt.key}" value="${this.escapeHTML(opt.text)}">
                        </div>
                    `).join('')}
                </div>
                <div style="display: flex; gap: 16px; align-items: center;">
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <span style="font-size: 13px; font-weight: 700;">Đáp án đúng:</span>
                        <select class="form-select edit-correct-ans" data-q-index="${idx}" style="width: 80px; padding: 4px 8px;">
                            ${q.options.map(opt => `
                                <option value="${opt.key}" ${opt.key === q.correctAnswer ? 'selected' : ''}>${opt.key}</option>
                            `).join('')}
                        </select>
                    </div>
                </div>
            </div>
        `).join('');

        container.querySelectorAll('.btn-delete-q').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const idx = parseInt(e.currentTarget.getAttribute('data-q-index'), 10);
                if (confirm(`Xóa câu hỏi ${idx + 1}?`)) {
                    bank.questions.splice(idx, 1);
                    this.renderEditBankQuestions(bank);
                    document.getElementById('edit-bank-total-info').textContent = `Tổng: ${bank.questions.length} câu hỏi`;
                }
            });
        });
    }

    saveEditedBank() {
        const bank = this.banks.find(b => b.id === this.currentEditingBankId);
        if (!bank) return;

        const container = document.getElementById('edit-bank-questions-list');
        const cards = container.querySelectorAll('.study-question-card');

        cards.forEach((card, idx) => {
            const q = bank.questions[idx];
            if (!q) return;

            const textElem = card.querySelector('.edit-q-text');
            if (textElem) q.question = textElem.value.trim();

            card.querySelectorAll('.edit-opt-text').forEach(optElem => {
                const key = optElem.getAttribute('data-opt-key');
                const optObj = q.options.find(o => o.key === key);
                if (optObj) optObj.text = optElem.value.trim();
            });

            const correctElem = card.querySelector('.edit-correct-ans');
            if (correctElem) q.correctAnswer = correctElem.value;
        });

        this.saveBanks();
        this.renderBankList();
        document.getElementById('modal-edit-bank').classList.remove('active');
        this.showToast('Đã lưu các thay đổi cho bộ đề!', 'success');
    }

    // ===============================================================
    // TAB 2: ÔN TẬP & HỌC BÀI (STUDY MODE)
    // Flashcard 3D & Luyện tương tác từng câu
    // ===============================================================
    bindStudyEvents() {
        document.getElementById('study-bank-selector')?.addEventListener('change', (e) => {
            this.study.activeBankId = e.target.value;
            this.setupStudyMode();
        });

        // Filters
        document.querySelectorAll('.study-filters .filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.study-filters .filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.study.filter = btn.getAttribute('data-filter');
                this.renderStudyQuestions();
            });
        });

        // Mode Switch: List vs Flashcard
        document.getElementById('btn-toggle-study-mode')?.addEventListener('click', () => {
            this.study.viewMode = this.study.viewMode === 'list' ? 'flashcard' : 'list';
            const btnText = document.getElementById('study-mode-text');
            const listView = document.getElementById('study-list-view');
            const fcView = document.getElementById('study-flashcard-view');

            if (this.study.viewMode === 'flashcard') {
                btnText.textContent = 'Chuyển sang Danh Sách Ôn';
                listView.style.display = 'none';
                fcView.style.display = 'block';
                this.study.flashcardIndex = 0;
                this.renderActiveFlashcard();
            } else {
                btnText.textContent = 'Chuyển sang Thẻ Ghi Nhớ (Flashcard)';
                listView.style.display = 'block';
                fcView.style.display = 'none';
                this.renderStudyQuestions();
            }
        });

        // Shuffle
        document.getElementById('btn-shuffle-study')?.addEventListener('click', () => {
            this.study.questions = this.shuffleArray([...this.study.questions]);
            this.showToast('Đã xáo trộn thứ tự các câu hỏi!', 'info');
            if (this.study.viewMode === 'flashcard') {
                this.study.flashcardIndex = 0;
                this.renderActiveFlashcard();
            } else {
                this.renderStudyQuestions();
            }
        });

        // Reset progress
        document.getElementById('btn-reset-study-progress')?.addEventListener('click', () => {
            this.study.answers = {};
            this.updateStudyProgress();
            this.renderStudyQuestions();
            this.showToast('Đã đặt lại tiến độ ôn tập câu hỏi!', 'info');
        });

        // Flashcard Interactions
        const fcCard = document.getElementById('active-flashcard');
        fcCard?.addEventListener('click', (e) => {
            // Không lật nếu bấm vào nút star
            if (e.target.closest('#fc-star-btn')) return;
            fcCard.classList.toggle('flipped');
        });

        // Spacebar to flip flashcard
        window.addEventListener('keydown', (e) => {
            if (this.study.viewMode === 'flashcard' && document.getElementById('tab-study').classList.contains('active')) {
                if (e.code === 'Space' && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
                    e.preventDefault();
                    fcCard?.classList.toggle('flipped');
                } else if (e.code === 'ArrowRight') {
                    document.getElementById('fc-next-btn')?.click();
                } else if (e.code === 'ArrowLeft') {
                    document.getElementById('fc-prev-btn')?.click();
                }
            }
        });

        document.getElementById('fc-next-btn')?.addEventListener('click', () => {
            if (this.study.flashcardIndex < this.study.questions.length - 1) {
                this.study.flashcardIndex++;
                this.renderActiveFlashcard();
            } else {
                this.showToast('Bạn đã xem hết các thẻ flashcard trong bộ đề này!', 'success');
            }
        });

        document.getElementById('fc-prev-btn')?.addEventListener('click', () => {
            if (this.study.flashcardIndex > 0) {
                this.study.flashcardIndex--;
                this.renderActiveFlashcard();
            }
        });

        document.getElementById('fc-star-btn')?.addEventListener('click', (e) => {
            e.stopPropagation();
            const q = this.study.questions[this.study.flashcardIndex];
            if (!q) return;
            if (this.study.starred.has(q.id)) {
                this.study.starred.delete(q.id);
            } else {
                this.study.starred.add(q.id);
            }
            this.saveStarred();
            this.renderActiveFlashcard();
        });
    }

    setupStudyMode() {
        const selector = document.getElementById('study-bank-selector');
        if (!selector) return;

        // Populate dropdown
        selector.innerHTML = `
            <option value="all">Tất cả các bộ đề đang chọn (${this.selectedBankIds.size} đề)</option>
            ${this.banks.map(b => `<option value="${b.id}">${this.escapeHTML(b.title)} (${b.questions.length} câu)</option>`).join('')}
        `;

        if (this.study.activeBankId && (this.study.activeBankId === 'all' || this.banks.some(b => b.id === this.study.activeBankId))) {
            selector.value = this.study.activeBankId;
        } else {
            selector.value = 'all';
            this.study.activeBankId = 'all';
        }

        // Gather questions
        let questionList = [];
        if (this.study.activeBankId === 'all') {
            const activeBanks = this.banks.filter(b => this.selectedBankIds.has(b.id));
            activeBanks.forEach(b => questionList.push(...b.questions));
        } else {
            const bank = this.banks.find(b => b.id === this.study.activeBankId);
            if (bank) questionList = [...bank.questions];
        }

        this.study.questions = questionList;
        this.updateStudyProgress();

        if (this.study.viewMode === 'flashcard') {
            this.study.flashcardIndex = 0;
            this.renderActiveFlashcard();
        } else {
            this.renderStudyQuestions();
        }
    }

    renderStudyQuestions() {
        const container = document.getElementById('study-questions-container');
        if (!container) return;

        let filtered = this.study.questions;

        if (this.study.filter === 'unanswered') {
            filtered = this.study.questions.filter(q => !this.study.answers[q.id]);
        } else if (this.study.filter === 'wrong') {
            filtered = this.study.questions.filter(q => this.study.answers[q.id] && !this.study.answers[q.id].isCorrect);
        } else if (this.study.filter === 'starred') {
            filtered = this.study.questions.filter(q => this.study.starred.has(q.id));
        }

        if (filtered.length === 0) {
            container.innerHTML = `
                <div class="empty-state" style="padding: 40px 20px;">
                    <i class="fa-solid fa-clipboard-check" style="font-size: 42px; color: var(--text-muted); margin-bottom: 12px;"></i>
                    <p>Không có câu hỏi nào trong mục này!</p>
                </div>
            `;
            return;
        }

        container.innerHTML = filtered.map((q, idx) => {
            const answered = this.study.answers[q.id];
            const isStarred = this.study.starred.has(q.id);

            return `
                <div class="study-question-card" id="study-card-${q.id}" data-qid="${q.id}">
                    <div class="study-question-header">
                        <span class="question-badge">Câu ${idx + 1}</span>
                        <button class="star-btn ${isStarred ? 'starred' : ''}" data-qid="${q.id}" title="Gắn sao câu hỏi này">
                            <i class="fa-solid fa-star"></i>
                        </button>
                    </div>

                    <div class="question-text">${this.escapeHTML(q.question)}</div>

                    <div class="options-list">
                        ${q.options.map(opt => {
                            let optionClass = '';
                            if (answered) {
                                if (opt.key === q.correctAnswer) {
                                    optionClass = 'show-correct';
                                } else if (opt.key === answered.selectedKey) {
                                    optionClass = 'selected-wrong';
                                }
                            }

                            return `
                                <div class="option-item ${optionClass}" data-qid="${q.id}" data-opt-key="${opt.key}">
                                    <div class="option-key">${opt.key}</div>
                                    <div class="option-text">${this.escapeHTML(opt.text)}</div>
                                </div>
                            `;
                        }).join('')}
                    </div>

                    <div class="explanation-box ${answered ? 'visible' : ''}">
                        <strong><i class="fa-solid fa-lightbulb"></i> Đáp án đúng: ${q.correctAnswer}</strong>
                        ${q.explanation ? `<div style="margin-top: 4px;">${this.escapeHTML(q.explanation)}</div>` : ''}
                    </div>
                </div>
            `;
        }).join('');

        // Gắn sự kiện chọn đáp án
        container.querySelectorAll('.option-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const qId = item.getAttribute('data-qid');
                const optKey = item.getAttribute('data-opt-key');
                this.handleStudyAnswer(qId, optKey);
            });
        });

        // Gắn sự kiện đánh dấu sao
        container.querySelectorAll('.star-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const qId = btn.getAttribute('data-qid');
                if (this.study.starred.has(qId)) {
                    this.study.starred.delete(qId);
                    btn.classList.remove('starred');
                } else {
                    this.study.starred.add(qId);
                    btn.classList.add('starred');
                }
                this.saveStarred();
                this.updateStudyProgress();
            });
        });
    }

    handleStudyAnswer(qId, selectedKey) {
        const q = this.study.questions.find(item => item.id === qId);
        if (!q) return;

        const isCorrect = selectedKey === q.correctAnswer;
        this.study.answers[qId] = { selectedKey, isCorrect };

        // Cập nhật giao diện của câu này mà không render lại toàn bộ list
        const card = document.getElementById(`study-card-${qId}`);
        if (!card) return;

        card.querySelectorAll('.option-item').forEach(item => {
            const key = item.getAttribute('data-opt-key');
            item.classList.remove('selected-correct', 'selected-wrong', 'show-correct');

            if (key === q.correctAnswer) {
                item.classList.add('show-correct');
            } else if (key === selectedKey) {
                item.classList.add('selected-wrong');
            }
        });

        const explBox = card.querySelector('.explanation-box');
        if (explBox) explBox.classList.add('visible');

        this.updateStudyProgress();
    }

    renderActiveFlashcard() {
        const q = this.study.questions[this.study.flashcardIndex];
        if (!q) return;

        const cardElem = document.getElementById('active-flashcard');
        cardElem.classList.remove('flipped');

        document.getElementById('fc-badge').textContent = `Câu ${this.study.flashcardIndex + 1} / ${this.study.questions.length}`;
        document.getElementById('fc-question-text').textContent = q.question;
        
        const starBtn = document.getElementById('fc-star-btn');
        starBtn.className = `star-btn ${this.study.starred.has(q.id) ? 'starred' : ''}`;

        const optsContainer = document.getElementById('fc-options-list');
        optsContainer.innerHTML = q.options.map(opt => `
            <div class="option-item" style="pointer-events: none;">
                <div class="option-key">${opt.key}</div>
                <div class="option-text">${this.escapeHTML(opt.text)}</div>
            </div>
        `).join('');

        const correctOpt = q.options.find(o => o.key === q.correctAnswer);
        const correctText = correctOpt ? `${q.correctAnswer}. ${correctOpt.text}` : q.correctAnswer;
        document.getElementById('fc-correct-answer').textContent = correctText || 'Chưa đánh dấu đáp án';
        document.getElementById('fc-explanation').textContent = q.explanation ? `Giải thích: ${q.explanation}` : '';

        document.getElementById('fc-indicator').textContent = `${this.study.flashcardIndex + 1} / ${this.study.questions.length}`;
    }

    updateStudyProgress() {
        const total = this.study.questions.length;
        let answeredCount = 0;
        let correctCount = 0;
        let wrongCount = 0;

        this.study.questions.forEach(q => {
            const ans = this.study.answers[q.id];
            if (ans) {
                answeredCount++;
                if (ans.isCorrect) correctCount++;
                else wrongCount++;
            }
        });

        const pct = total > 0 ? Math.round((answeredCount / total) * 100) : 0;
        
        document.getElementById('count-study-all').textContent = total;
        document.getElementById('count-study-unanswered').textContent = total - answeredCount;
        document.getElementById('count-study-wrong').textContent = wrongCount;
        document.getElementById('count-study-starred').textContent = this.study.starred.size;

        document.getElementById('study-progress-text').textContent = `${answeredCount}/${total} câu (${pct}%)`;
        document.getElementById('study-correct-text').textContent = correctCount;
        document.getElementById('study-wrong-text').textContent = wrongCount;
        document.getElementById('study-progress-bar').style.width = `${pct}%`;
    }

    // ===============================================================
    // TAB 3: PHÒNG THI THỬ (EXAM / MOCK TEST MODE)
    // Tùy chọn: Chọn file muốn thi, tick toàn bộ, cấu hình số câu & thời gian
    // ===============================================================
    bindExamEvents() {
        // "Tick toàn bộ" checkbox in Exam Setup
        document.getElementById('exam-tick-all-banks')?.addEventListener('change', (e) => {
            const isChecked = e.target.checked;
            document.querySelectorAll('.exam-bank-cb').forEach(cb => {
                cb.checked = isChecked;
            });
            this.updateExamTotalQuestionsEstimate();
        });

        // Question count option cards
        document.querySelectorAll('.setup-option-card[data-qcount]').forEach(card => {
            card.addEventListener('click', () => {
                document.querySelectorAll('.setup-option-card[data-qcount]').forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
            });
        });

        // Time option cards
        document.querySelectorAll('.setup-option-card[data-time]').forEach(card => {
            card.addEventListener('click', () => {
                document.querySelectorAll('.setup-option-card[data-time]').forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
            });
        });

        // Start Exam Button
        document.getElementById('btn-start-exam-now')?.addEventListener('click', () => {
            this.startExam();
        });

        // Flag current question button
        document.getElementById('btn-flag-current')?.addEventListener('click', () => {
            const idx = this.exam.currentIndex;
            if (this.exam.flags.has(idx)) {
                this.exam.flags.delete(idx);
            } else {
                this.exam.flags.add(idx);
            }
            this.updateExamQuestionUI();
            this.updateExamSidebarGrid();
        });

        // Prev & Next question buttons
        document.getElementById('btn-exam-prev')?.addEventListener('click', () => {
            if (this.exam.currentIndex > 0) {
                this.exam.currentIndex--;
                this.updateExamQuestionUI();
                this.updateExamSidebarGrid();
            }
        });

        document.getElementById('btn-exam-next')?.addEventListener('click', () => {
            if (this.exam.currentIndex < this.exam.questions.length - 1) {
                this.exam.currentIndex++;
                this.updateExamQuestionUI();
                this.updateExamSidebarGrid();
            }
        });

        // Submit Exam Button -> Opens Confirm Modal
        document.getElementById('btn-submit-exam')?.addEventListener('click', () => {
            this.openSubmitConfirmModal();
        });

        document.getElementById('btn-cancel-submit-confirm')?.addEventListener('click', () => {
            document.getElementById('modal-submit-confirm').classList.remove('active');
        });

        document.getElementById('btn-final-submit-confirm')?.addEventListener('click', () => {
            document.getElementById('modal-submit-confirm').classList.remove('active');
            this.finishExam();
        });

        // Retake Exam Buttons
        document.getElementById('btn-retake-all')?.addEventListener('click', () => {
            this.startExam();
        });

        document.getElementById('btn-retake-wrong')?.addEventListener('click', () => {
            this.startRetakeWrongQuestions();
        });

        document.getElementById('btn-back-setup')?.addEventListener('click', () => {
            document.getElementById('exam-setup-container').style.display = 'block';
            document.getElementById('exam-active-container').style.display = 'none';
            document.getElementById('exam-result-container').style.display = 'none';
        });

        // Result Filter (All vs Wrong)
        document.getElementById('btn-filter-res-all')?.addEventListener('click', (e) => {
            document.getElementById('btn-filter-res-all').classList.add('active');
            document.getElementById('btn-filter-res-wrong').classList.remove('active');
            this.renderExamReviewList('all');
        });

        document.getElementById('btn-filter-res-wrong')?.addEventListener('click', (e) => {
            document.getElementById('btn-filter-res-wrong').classList.add('active');
            document.getElementById('btn-filter-res-all').classList.remove('active');
            this.renderExamReviewList('wrong');
        });
    }

    setupExamScreen() {
        const container = document.getElementById('exam-bank-selection-list');
        if (!container) return;

        if (this.banks.length === 0) {
            container.innerHTML = `<p style="padding: 10px; color: var(--text-muted);">Chưa có bộ đề nào để thi. Vui lòng thêm đề cương trước!</p>`;
            return;
        }

        container.innerHTML = this.banks.map(bank => {
            const isChecked = this.selectedBankIds.has(bank.id);
            return `
                <label class="bank-select-item">
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <input type="checkbox" class="custom-checkbox exam-bank-cb" data-bank-id="${bank.id}" ${isChecked ? 'checked' : ''}>
                        <span style="font-weight: 600; font-size: 14px;">${this.escapeHTML(bank.title)}</span>
                    </div>
                    <span class="bank-pill pill-count" style="font-size: 12px;">${bank.questions.length} câu</span>
                </label>
            `;
        }).join('');

        // Sync "Tick toàn bộ" checkbox
        const tickAll = document.getElementById('exam-tick-all-banks');
        if (tickAll) {
            tickAll.checked = this.selectedBankIds.size === this.banks.length;
        }

        container.querySelectorAll('.exam-bank-cb').forEach(cb => {
            cb.addEventListener('change', () => {
                const checkedCount = container.querySelectorAll('.exam-bank-cb:checked').length;
                if (tickAll) tickAll.checked = checkedCount === this.banks.length;
                this.updateExamTotalQuestionsEstimate();
            });
        });

        this.updateExamTotalQuestionsEstimate();
    }

    updateExamTotalQuestionsEstimate() {
        const checkedBankIds = Array.from(document.querySelectorAll('.exam-bank-cb:checked')).map(cb => cb.getAttribute('data-bank-id'));
        let totalQ = 0;
        this.banks.filter(b => checkedBankIds.includes(b.id)).forEach(b => {
            totalQ += b.questions.length;
        });

        const label = document.getElementById('setup-total-q-label');
        if (label) label.textContent = `${totalQ} câu`;
    }

    startExam() {
        const checkedBankIds = Array.from(document.querySelectorAll('.exam-bank-cb:checked')).map(cb => cb.getAttribute('data-bank-id'));
        if (checkedBankIds.length === 0) {
            this.showToast('Vui lòng chọn ít nhất 1 file đề thi hoặc tick chọn toàn bộ!', 'error');
            return;
        }

        // Gom câu hỏi từ các file đã tick
        let pooledQuestions = [];
        this.banks.filter(b => checkedBankIds.includes(b.id)).forEach(b => {
            pooledQuestions.push(...b.questions);
        });

        if (pooledQuestions.length === 0) {
            this.showToast('Không có câu hỏi nào trong các bộ đề đã chọn!', 'error');
            return;
        }

        // Tùy chọn xáo trộn
        const shuffleQ = document.getElementById('exam-opt-shuffle-q')?.checked;
        const shuffleAns = document.getElementById('exam-opt-shuffle-ans')?.checked;

        let examQuestions = pooledQuestions.map(q => {
            let options = [...q.options];
            if (shuffleAns) {
                options = this.shuffleArray(options);
            }
            return {
                ...q,
                options: options
            };
        });

        if (shuffleQ) {
            examQuestions = this.shuffleArray(examQuestions);
        }

        // Số lượng câu hỏi
        const qCountCard = document.querySelector('.setup-option-card[data-qcount].selected');
        const qCountChoice = qCountCard ? qCountCard.getAttribute('data-qcount') : 'all';
        if (qCountChoice !== 'all') {
            const count = parseInt(qCountChoice, 10);
            examQuestions = examQuestions.slice(0, count);
        }

        // Thời gian làm bài
        const timeCard = document.querySelector('.setup-option-card[data-time].selected');
        const timeMinutes = timeCard ? parseInt(timeCard.getAttribute('data-time'), 10) : 30;

        // Cập nhật State thi
        this.exam = {
            selectedBankIds: checkedBankIds,
            questions: examQuestions,
            currentIndex: 0,
            answers: {},
            flags: new Set(),
            timeTotalMinutes: timeMinutes,
            timeRemainingSeconds: timeMinutes * 60,
            timerHandle: null,
            startTime: Date.now(),
            isFinished: false
        };

        // Chuyển màn hình thi
        document.getElementById('exam-setup-container').style.display = 'none';
        document.getElementById('exam-active-container').style.display = 'block';
        document.getElementById('exam-result-container').style.display = 'none';

        document.getElementById('exam-active-title').textContent = `Thi Thử (${examQuestions.length} câu hỏi)`;
        document.getElementById('exam-active-subtitle').textContent = `${checkedBankIds.length} bộ đề được chọn • Thời gian: ${timeMinutes === 0 ? 'Tự do' : timeMinutes + ' phút'}`;

        this.startTimer();
        this.updateExamQuestionUI();
        this.updateExamSidebarGrid();
    }

    startTimer() {
        if (this.exam.timerHandle) clearInterval(this.exam.timerHandle);

        const timerDisplay = document.getElementById('exam-timer-display');
        const digits = document.getElementById('exam-timer-digits');

        if (this.exam.timeTotalMinutes === 0) {
            // Không giới hạn thời gian (Đếm xuôi)
            let elapsed = 0;
            digits.textContent = '00:00';
            timerDisplay.className = 'exam-timer';

            this.exam.timerHandle = setInterval(() => {
                elapsed++;
                const mins = Math.floor(elapsed / 60);
                const secs = elapsed % 60;
                digits.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
            }, 1000);
            return;
        }

        // Đếm ngược
        this.updateTimerDisplay();

        this.exam.timerHandle = setInterval(() => {
            this.exam.timeRemainingSeconds--;
            this.updateTimerDisplay();

            if (this.exam.timeRemainingSeconds <= 0) {
                clearInterval(this.exam.timerHandle);
                this.showToast('Hết giờ làm bài thi!', 'error');
                this.finishExam();
            }
        }, 1000);
    }

    updateTimerDisplay() {
        const digits = document.getElementById('exam-timer-digits');
        const timerDisplay = document.getElementById('exam-timer-display');
        const rem = this.exam.timeRemainingSeconds;

        const mins = Math.floor(rem / 60);
        const secs = rem % 60;
        digits.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

        if (rem <= 60) {
            timerDisplay.className = 'exam-timer danger';
        } else if (rem <= 300) {
            timerDisplay.className = 'exam-timer warning';
        } else {
            timerDisplay.className = 'exam-timer';
        }
    }

    updateExamQuestionUI() {
        const q = this.exam.questions[this.exam.currentIndex];
        if (!q) return;

        const total = this.exam.questions.length;
        const currentIdx = this.exam.currentIndex;

        document.getElementById('exam-current-index-label').textContent = `CÂU HỎI ${currentIdx + 1} / ${total}`;
        document.getElementById('exam-question-text').textContent = q.question;

        // Flag button
        const flagBtn = document.getElementById('btn-flag-current');
        if (this.exam.flags.has(currentIdx)) {
            flagBtn.classList.add('flagged');
            flagBtn.innerHTML = '<i class="fa-solid fa-flag"></i> Đã đánh dấu xem lại';
        } else {
            flagBtn.classList.remove('flagged');
            flagBtn.innerHTML = '<i class="fa-regular fa-flag"></i> Đánh dấu xem lại';
        }

        // Render radio options
        const optionsContainer = document.getElementById('exam-options-container');
        const selectedKey = this.exam.answers[currentIdx];

        optionsContainer.innerHTML = q.options.map(opt => `
            <div class="exam-option-radio ${selectedKey === opt.key ? 'checked' : ''}" data-key="${opt.key}">
                <div class="option-key">${opt.key}</div>
                <div class="option-text">${this.escapeHTML(opt.text)}</div>
            </div>
        `).join('');

        optionsContainer.querySelectorAll('.exam-option-radio').forEach(radio => {
            radio.addEventListener('click', () => {
                const key = radio.getAttribute('data-key');
                this.exam.answers[currentIdx] = key;
                this.updateExamQuestionUI();
                this.updateExamSidebarGrid();
            });
        });

        // Navigation state
        const prevBtn = document.getElementById('btn-exam-prev');
        const nextBtn = document.getElementById('btn-exam-next');
        prevBtn.disabled = currentIdx === 0;
        nextBtn.disabled = currentIdx === total - 1;

        const answeredCount = Object.keys(this.exam.answers).length;
        document.getElementById('exam-answered-stat').textContent = `Đã trả lời: ${answeredCount} / ${total}`;
    }

    updateExamSidebarGrid() {
        const grid = document.getElementById('exam-question-grid');
        if (!grid) return;

        const total = this.exam.questions.length;
        const currentIdx = this.exam.currentIndex;

        grid.innerHTML = this.exam.questions.map((q, idx) => {
            const isAnswered = this.exam.answers[idx] !== undefined;
            const isFlagged = this.exam.flags.has(idx);
            const isCurrent = idx === currentIdx;

            let classes = 'grid-cell';
            if (isAnswered) classes += ' answered';
            if (isFlagged) classes += ' flagged';
            if (isCurrent) classes += ' active-question';

            return `<div class="${classes}" data-index="${idx}">${idx + 1}</div>`;
        }).join('');

        grid.querySelectorAll('.grid-cell').forEach(cell => {
            cell.addEventListener('click', () => {
                const idx = parseInt(cell.getAttribute('data-index'), 10);
                this.exam.currentIndex = idx;
                this.updateExamQuestionUI();
                this.updateExamSidebarGrid();
            });
        });

        const answeredCount = Object.keys(this.exam.answers).length;
        const pct = Math.round((answeredCount / total) * 100);
        document.getElementById('exam-sidebar-progress').textContent = `${pct}% (${answeredCount}/${total})`;
    }

    openSubmitConfirmModal() {
        const modal = document.getElementById('modal-submit-confirm');
        const total = this.exam.questions.length;
        const answeredCount = Object.keys(this.exam.answers).length;
        const unansweredCount = total - answeredCount;

        document.getElementById('confirm-answered-count').textContent = `${answeredCount} / ${total} câu`;
        document.getElementById('confirm-unanswered-count').textContent = `${unansweredCount} câu`;

        modal.classList.add('active');
    }

    finishExam() {
        if (this.exam.timerHandle) clearInterval(this.exam.timerHandle);
        this.exam.isFinished = true;

        const durationSeconds = Math.round((Date.now() - this.exam.startTime) / 1000);
        const mins = Math.floor(durationSeconds / 60);
        const secs = durationSeconds % 60;
        const timeTakenFormatted = `${mins}m ${secs}s`;

        let correctCount = 0;
        let wrongCount = 0;
        const total = this.exam.questions.length;

        this.exam.questions.forEach((q, idx) => {
            const userChoice = this.exam.answers[idx];
            if (userChoice && userChoice === q.correctAnswer) {
                correctCount++;
            } else {
                wrongCount++;
            }
        });

        // Điểm theo thang điểm 10
        const rawScore = (correctCount / total) * 10;
        const score = parseFloat(rawScore.toFixed(1));
        const accuracyPct = Math.round((correctCount / total) * 100);

        // Lưu lịch sử
        const historyItem = {
            id: 'hist_' + Date.now(),
            date: new Date().toISOString(),
            bankTitle: `Bài thi ${total} câu (${this.exam.selectedBankIds.length} bộ đề)`,
            score: score,
            correctCount: correctCount,
            totalCount: total,
            duration: timeTakenFormatted
        };
        this.history.unshift(historyItem);
        this.saveHistory();

        // Hiển thị màn hình kết quả
        document.getElementById('exam-active-container').style.display = 'none';
        document.getElementById('exam-result-container').style.display = 'block';

        document.getElementById('res-score-num').textContent = score;
        document.getElementById('res-correct-count').textContent = `${correctCount}/${total}`;
        document.getElementById('res-wrong-count').textContent = wrongCount;
        document.getElementById('res-time-taken').textContent = timeTakenFormatted;
        document.getElementById('res-accuracy').textContent = `${accuracyPct}%`;
        document.getElementById('res-wrong-filter-count').textContent = wrongCount;

        // Bình luận kết quả
        const titleText = document.getElementById('res-title-text');
        const commentText = document.getElementById('res-comment-text');

        if (score >= 9.0) {
            titleText.textContent = 'Xuất Sắc! Bạn Đạt Điểm Gần Như Tuyệt Đối';
            commentText.textContent = 'Kiến thức của bạn rất vững vàng, tiếp tục phát huy nhé!';
            this.launchConfetti();
        } else if (score >= 8.0) {
            titleText.textContent = 'Rất Tốt! Bạn Đã Đạt Điểm Giỏi';
            commentText.textContent = 'Một bài thi ấn tượng, chỉ sai một số ít câu!';
            this.launchConfetti();
        } else if (score >= 5.0) {
            titleText.textContent = 'Đạt Yêu Cầu! Cần Ôn Tập Thêm';
            commentText.textContent = 'Bạn đã vượt qua bài thi, hãy xem lại các câu sai để cải thiện điểm số.';
        } else {
            titleText.textContent = 'Cần Cố Gắng Hơn Nữa!';
            commentText.textContent = 'Đừng nản lòng, hãy dùng tính năng "Ôn tập" để luyện kỹ lại các câu chưa đúng nhé.';
        }

        this.renderExamReviewList('all');
    }

    launchConfetti() {
        if (window.confetti) {
            confetti({
                particleCount: 120,
                spread: 70,
                origin: { y: 0.6 }
            });
        }
    }

    renderExamReviewList(filter = 'all') {
        const container = document.getElementById('exam-review-list');
        if (!container) return;

        let list = this.exam.questions.map((q, idx) => ({
            ...q,
            userAnswer: this.exam.answers[idx] || null,
            isCorrect: this.exam.answers[idx] === q.correctAnswer
        }));

        if (filter === 'wrong') {
            list = list.filter(item => !item.isCorrect);
        }

        if (list.length === 0) {
            container.innerHTML = `
                <div class="empty-state" style="padding: 30px;">
                    <i class="fa-solid fa-circle-check" style="color: var(--success); font-size: 36px; margin-bottom: 8px;"></i>
                    <p>Chúc mừng! Không có câu hỏi nào bị sai trong bài thi này.</p>
                </div>
            `;
            return;
        }

        container.innerHTML = list.map((item, idx) => `
            <div class="study-question-card">
                <div class="study-question-header">
                    <span class="question-badge" style="background: ${item.isCorrect ? 'var(--success-bg)' : 'var(--danger-bg)'}; color: ${item.isCorrect ? 'var(--success)' : 'var(--danger)'}; border-color: ${item.isCorrect ? 'var(--success-border)' : 'var(--danger-border)'};">
                        ${item.isCorrect ? '<i class="fa-solid fa-check"></i> Đúng' : '<i class="fa-solid fa-xmark"></i> Sai'} - Câu ${item.index || (idx + 1)}
                    </span>
                    <span style="font-size: 13px; color: var(--text-muted);">
                        Bạn chọn: <strong style="color: ${item.isCorrect ? 'var(--success)' : 'var(--danger)'};">${item.userAnswer || 'Chưa trả lời'}</strong>
                    </span>
                </div>

                <div class="question-text">${this.escapeHTML(item.question)}</div>

                <div class="options-list">
                    ${item.options.map(opt => {
                        let optClass = '';
                        if (opt.key === item.correctAnswer) {
                            optClass = 'show-correct';
                        } else if (opt.key === item.userAnswer && !item.isCorrect) {
                            optClass = 'selected-wrong';
                        }

                        return `
                            <div class="option-item ${optClass}" style="cursor: default;">
                                <div class="option-key">${opt.key}</div>
                                <div class="option-text">${this.escapeHTML(opt.text)}</div>
                            </div>
                        `;
                    }).join('')}
                </div>

                <div class="explanation-box visible">
                    <strong><i class="fa-solid fa-lightbulb"></i> Đáp án đúng: ${item.correctAnswer}</strong>
                    ${item.explanation ? `<div style="margin-top: 4px;">${this.escapeHTML(item.explanation)}</div>` : ''}
                </div>
            </div>
        `).join('');
    }

    startRetakeWrongQuestions() {
        const wrongQuestions = this.exam.questions.filter((q, idx) => {
            return this.exam.answers[idx] !== q.correctAnswer;
        });

        if (wrongQuestions.length === 0) {
            this.showToast('Bạn đã làm đúng tất cả các câu trong đề này!', 'success');
            return;
        }

        this.exam = {
            selectedBankIds: this.exam.selectedBankIds,
            questions: this.shuffleArray([...wrongQuestions]),
            currentIndex: 0,
            answers: {},
            flags: new Set(),
            timeTotalMinutes: 0, // Không giới hạn giờ khi luyện lại câu sai
            timeRemainingSeconds: 0,
            timerHandle: null,
            startTime: Date.now(),
            isFinished: false
        };

        document.getElementById('exam-setup-container').style.display = 'none';
        document.getElementById('exam-active-container').style.display = 'block';
        document.getElementById('exam-result-container').style.display = 'none';

        document.getElementById('exam-active-title').textContent = `Thi Lại Các Câu Sai (${wrongQuestions.length} câu)`;
        document.getElementById('exam-active-subtitle').textContent = `Tập trung củng cố kiến thức các câu đã trả lời chưa đúng`;

        this.startTimer();
        this.updateExamQuestionUI();
        this.updateExamSidebarGrid();
        this.showToast(`Bắt đầu thi lại ${wrongQuestions.length} câu làm sai!`, 'info');
    }

    // ===============================================================
    // TAB 4: LỊCH SỬ ĐIỂM SỐ
    // ===============================================================
    renderHistory() {
        const tbody = document.getElementById('history-table-body');
        const empty = document.getElementById('history-empty');
        if (!tbody) return;

        if (this.history.length === 0) {
            tbody.innerHTML = '';
            empty.style.display = 'block';
            return;
        }

        empty.style.display = 'none';
        tbody.innerHTML = this.history.map((item, idx) => {
            const dateStr = new Date(item.date).toLocaleString('vi-VN');
            const scoreClass = item.score >= 8 ? 'color: var(--success); font-weight: 800;' : item.score >= 5 ? 'color: var(--primary); font-weight: 700;' : 'color: var(--danger); font-weight: 700;';

            return `
                <tr>
                    <td>${dateStr}</td>
                    <td><strong>${this.escapeHTML(item.bankTitle)}</strong></td>
                    <td>${item.correctCount} / ${item.totalCount}</td>
                    <td><span style="${scoreClass}; font-size: 16px;">${item.score} / 10</span></td>
                    <td>${item.duration}</td>
                    <td>
                        <button class="btn btn-icon btn-outline-danger btn-del-history" data-id="${item.id}" title="Xóa lượt thi này" style="width: 32px; height: 32px;">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </td>
                </tr>
            `;
        }).join('');

        tbody.querySelectorAll('.btn-del-history').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.getAttribute('data-id');
                this.history = this.history.filter(h => h.id !== id);
                this.saveHistory();
                this.renderHistory();
            });
        });
    }

    // ===============================================================
    // UTILITY HELPERS
    // ===============================================================
    shuffleArray(array) {
        const arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    escapeHTML(str) {
        if (!str) return '';
        return str
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }
}

// Khởi chạy ứng dụng khi DOM sẵn sàng
document.addEventListener('DOMContentLoaded', () => {
    window.app = new QuizApp();
});
