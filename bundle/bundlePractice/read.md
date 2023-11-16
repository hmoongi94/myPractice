먼저 프로젝트 폴더를 만들고, 아래와 같이 몇 가지 파일을 생성합니다.

index.html
src/main.js
src/module1.js
src/module2.js
module1.js와 module2.js에 각각 간단한 함수를 정의합니다.

javascript
Copy code
// module1.js
export function greet(name) {
  return `Hello, ${name}!`;
}
javascript
Copy code
// module2.js
export function square(x) {
  return x * x;
}
main.js에서 두 모듈을 가져와서 사용합니다.

javascript
Copy code
// main.js
import { greet } from './module1';
import { square } from './module2';

console.log(greet('John'));
console.log(square(5));
프로젝트 루트에서 터미널을 열고 다음 명령어를 실행하여 Webpack을 설치합니다.

bash
Copy code
npm install webpack webpack-cli --save-dev
package.json 파일에 다음 스크립트를 추가합니다.

json
Copy code
"scripts": {
  "build": "webpack"
}
터미널에서 다음 명령어를 실행하여 번들링을 수행합니다.

bash
Copy code
npm run build
번들된 파일이 dist 폴더에 생성됩니다. 이제 index.html 파일을 브라우저로 열어서 개발자 도구 콘솔을 확인해보세요.

이제 여러 모듈이 하나로 묶여서 번들링된 결과를 확인하실 수 있을 것입니다. 이 예제는 간단한 시작점일 뿐이지만, 프로젝트 규모가 커지면 번들링이 코드를 효과적으로 관리하고 최적화하는 데 도움이 됩니다. Webpack 외에도 다양한 번들러들이 있으니 프로젝트에 맞게 선택하여 사용하시면 됩니다.