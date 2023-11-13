const fs = require('fs');
const path = require('path');

// 파일 읽기 및 데이터 파싱 함수
function readFileAndParseASync(fileName, dataPath, initialData, cookDataFunc) {
    dataPath = path.join(__dirname, `../data/${fileName}`);
    fs.readFile(dataPath, 'utf8', (err, fileData) => {
        if (err) {
            throw new Error(`${fileName}을 읽지 못하였습니다.`);
        } else {
            try {
                const data = JSON.parse(fileData);
                cookDataFunc(data);
            } catch (parseError) {
                throw new Error(`데이터 파싱 오류: ${parseError.message}`);
            }
        }
    });
}

// 사용자 데이터 가공 함수
function processUserData(userData, writeToFileFunc) {
    const processedData = userData.map(user => ({
        name: user.name,
        email: user.email,
    }));

    // 가공된 데이터를 문자열로 변환
    const processedDataString = JSON.stringify(processedData, null, 2);

    // 파일 쓰기 콜백 함수 호출
    writeToFileFunc('processedData.json', processedDataString);
}

// 파일 쓰기 함수
function writeFileCallback(filePath, data) {
    fs.writeFile(filePath, data, 'utf8', (err) => {
        if (err) {
            console.error('파일 쓰기 오류:', err);
        } else {
            console.log('파일이 성공적으로 쓰여졌습니다.');
        }
    });
}

// 사용자 데이터를 읽어오고, 가공 함수를 통해 파일에 쓰기
readFileAndParseASync('userData.json', 'dataPath', [], (userData) => {
    processUserData(userData, writeFileCallback);
});