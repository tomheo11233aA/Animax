export const typeMovie = [
    {
        id: 1,
        name: 'Anime',
    },
    {
        id: 2,
        name: 'Action',
    },
    {
        id: 3,
        name: 'Adventure',
    },
    {
        id: 4,
        name: 'Fantasy',
    },
    {
        id: 5,
        name: 'Supernatural',
    },
    {
        id: 6,
        name: 'Shounen',
    },
    {
        id: 7,
        name: 'Material Arts',
    }
]

// fakeBanner bao gồm id, tên anime, ảnh anime, mô tả anime, thể loại anime, số tập anime, ngày công chiếu anime
// thể loại anime sẽ được lấy từ typeMovie

export const fakeBanner = [
    {
        id: 1,
        name: 'One Piece',
        image: 'https://i.pinimg.com/originals/0e/9f/9e/0e9f9e7a8e3a1e9b1b1a2c6f3f4b6a4b.jpg',
        description: 'One Piece là một bộ manga dài kỷ lục của Nhật Bản được viết và minh họa bởi Eiichiro Oda. Bộ truyện được đăng định kỳ trên tạp chí Weekly Shōnen Jump của nhà xuất bản Shueisha từ ngày 22 tháng 7 năm 1997, và được chuyển thể thành anime bởi Toei Animation từ năm 1999.',
        typeMovie: [1, 2, 3, 4, 5, 6, 7],
        episode: 1000,
        date: '22/7/1997'
    },
    {
        id: 2,
        name: 'Naruto',
        image: 'https://i.pinimg.com/originals/0e/9f/9e/0e9f9e7a8e3a1e9b1b1a2c6f3f4b6a4b.jpg',
        description: 'Naruto là một bộ truyện tranh Nhật Bản của tác giả Kishimoto Masashi. Bộ truyện kể về một cậu bé tên là Uzumaki Naruto có một ước mơ lớn, trở thành Hokage để được mọi người công nhận.',
        typeMovie: [1, 2, 3, 4, 5, 6, 7],
        episode: 1000,
        date: '22/7/1997'
    },
    {
        id: 3,
        name: 'Dragon Ball',
        image: 'https://i.pinimg.com/originals/0e/9f/9e/0e9f9e7a8e3a1e9b1b1a2c6f3f4b6a4b.jpg',
        description: 'Dragon Ball là một bộ truyện tranh nổi tiếng của tác giả Akira Toriyama được một số nước trên thế giới xuất bản. Truyện đã được chuyển thể thành anime và được phát sóng trên nhiều kênh truyền hình khác nhau.',
        typeMovie: [1, 2, 3, 4, 5, 6, 7],
        episode: 1000,
        date: '22/7/1997'
    }
]
