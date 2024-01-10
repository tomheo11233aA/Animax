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

## Sử dụng `Txt` từ `@components/common/Txt`

`Txt` là một component được tạo ra để thay thế cho `Text` mặc định của React Native, với các props được tùy chỉnh sẵn để dễ dàng sử dụng và hỗ trợ theming.

Cách sử dụng `Txt`:

```jsx
import Txt from '@components/common/Txt';

const ExampleText = () => {
return (
<Txt
size={16}
color="blue"
center
// Các props khác theo nhu cầu
>
Đây là văn bản mẫu
</Txt>
);
};
```

Nhớ thêm các props tùy chỉnh khác vào `Txt` để điều chỉnh theo nhu cầu của bạn.

## Sử dụng `Btn` từ `@components/common/Btn`

`Btn` là một component được tạo ra để thay thế cho `TouchableOpacity` mặc định của React Native, với các props được tùy chỉnh sẵn để dễ dàng sử dụng và hỗ trợ theming.

Cách sử dụng `Btn`:

```jsx
import Btn from '@components/common/Btn';

const ExampleButton = () => {
return (
<Btn
onPress={() => console.log('Button pressed')}
backgroundColor="red"
padding={10}
radius={5}
// Các props khác theo nhu cầu
>
Nhấn vào đây
</Btn>
);
};
```
Nhớ thêm các props tùy chỉnh khác vào `Btn` để điều chỉnh theo nhu cầu của bạn.

## Sử dụng `Scroll` từ `@components/common/Scroll`
`Scroll` là một component được tạo ra để thay thế cho `ScrollView` mặc định của React Native, với các props được tùy chỉnh sẵn để dễ dàng sử dụng.

Cách sử dụng `Scroll`:
```jsx
import Scroll from '@components/common/Scroll';

const ExampleScroll = () => {
return (
<Scroll
horizontal
showsHorizontalScrollIndicator={false}
// Các props khác theo nhu cầu
>
{/ Nội dung bên trong Scroll /}
</Scroll>
);
};
```

Nhớ thêm các props tùy chỉnh khác vào `Scroll` để điều chỉnh theo nhu cầu của bạn.

## Sử dụng `Input` từ `@components/common/Input`

`Input` là một component được tạo ra để thay thế cho `TextInput` mặc định của React Native, với các props được tùy chỉnh sẵn để dễ dàng sử dụng và hỗ trợ theming.

Cách sử dụng `Input`:
```jsx
import Input from '@components/common/Input';

const ExampleInput = () => {
return (
<Input
value={yourValue}
onChangeText={yourOnChangeTextFunction}
hint="Nhập văn bản"
// Các props khác theo nhu cầu
/>
);
};
```
Nhớ thêm các props tùy chỉnh khác vào `Input` để điều chỉnh theo nhu cầu của bạn.
