# Lưu ý sử dụng trong dự án

## Sử dụng `KeyBoardSafe`

Trong tất cả các màn hình của ứng dụng, bạn **phải** sử dụng component `KeyBoardSafe` từ `@components/reuse/KeyBoardSafe.tsx`. `KeyBoardSafe` giúp quản lý việc hiển thị bàn phím ảo một cách thông minh, tránh việc che khuất nội dung.

Ví dụ sử dụng:
```jsx
import KeyBoardSafe from '@components/reuse/KeyBoardSafe';

const YourScreen = () => {
return (
<KeyBoardSafe>
{/ Nội dung của màn hình /}
</KeyBoardSafe>
);
};
```

## Sử dụng `Box` từ `@components/common/Box`

`Box` là một component được tạo ra để thay thế cho `View` mặc định của React Native, với các props được tùy chỉnh sẵn để dễ dàng sử dụng.

Cách sử dụng `Box`:
```jsx
import Box from '@components/common/Box';
import { colors } from '@theme/colors';

const Example = () => {
return (
<Box
flex={1}
alignCenter
justifyCenter
backgroundColor={colors.white}
// Thêm row để set flexDirection là 'row'
// row
>
{/ Nội dung bên trong /}
</Box>
);
};
```


Nhớ thêm `row` vào props của `Box` nếu bạn muốn sử dụng `flexDirection: 'row'`.

## Custom màu sắc theo Theme

Khi bạn muốn custom màu sắc cho các màn hình theo theme (sáng/tối), bạn cần sử dụng `themeUserSelector` để lấy thông tin theme hiện tại và `useAppSelector` để kết nối với Redux store.

Đầu tiên, import các hook từ thư viện Redux:

import { useAppSelector } from '@hooks/redux';
import { themeUserSelector } from '@redux/selector/appSelector';

Sau đó, bạn có thể sử dụng `themeUserSelector` trong component của mình để lấy theme hiện tại:
const theme = useAppSelector(themeUserSelector);

Với giá trị `theme` thu được, bạn có thể điều chỉnh màu sắc của các component dựa trên theme. Ví dụ, nếu bạn muốn set màu nền cho `Box`:

```jsx
import Box from '@components/common/Box';
import { useAppSelector } from '@hooks/redux';
import { themeUserSelector } from '@redux/selector/appSelector';
import Box from '@components/common/Box';
import { colors } from '@theme/colors';

const ExampleComponent = () => {
const theme = useAppSelector(themeUserSelector);

return (
<Box
flex={1}
alignCenter
justifyCenter
backgroundColor={theme === 'light' ? colors.lightBackground : colors.darkBackground}
// Thêm row nếu muốn flexDirection là 'row'
// row
>
{/ Nội dung bên trong /}
</Box>
);
};
```


Trong ví dụ trên, `Box` sẽ có màu nền tương ứng với theme sáng hoặc tối. Bạn cần đảm bảo rằng các màu sắc đã được định nghĩa trong `@theme/colors`.

Nhớ rằng, mọi thay đổi màu sắc theo theme cần được áp dụng một cách nhất quán trong toàn bộ ứng dụng để đảm bảo trải nghiệm người dùng tốt nhất.