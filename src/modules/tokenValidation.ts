import jwt from 'jsonwebtoken';

const verifyWithToken = async (req) => {
  // 토큰이 있는지 없는지만 확인
  try {
    const authorization = await req.headers.authorization;
    jwt.verify(authorization, process.env.randomNum);
    const payload = authorization.split('.')[1];
    const data = Buffer.from(payload, 'base64');
    req.decoded = JSON.parse(data);
  } catch (err) {
    err.status = 401;
    err.message = 'Invalid Token Error';
    throw err;
  }
};

const publishToken = async (userData) => {
  //갱신과, 생성을 동시에 하나의 코드로
  try {
    const token = jwt.sign(
      {
        id: userData.id, //payload
      },
      process.env.randomNum,
      {
        issuer: 'hyoseok',
        expiresIn: process.env.tokenTime + 'h',
      }
    );
    return token;
  } catch (err) {
    4;
    console.log(`publishToken Error : ${err.message}`);
  }
};

module.exports = { verifyWithToken, publishToken };
