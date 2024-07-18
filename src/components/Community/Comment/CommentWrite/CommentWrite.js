import { styled } from 'styled-components';

function CommentWrite() {
  const onClickSubmit = () => {};
  return (
    <Container>
      <CommentBox placeholder="댓글을 입력하세요." />
      <SubmitBtn onClick={onClickSubmit}>등록하기</SubmitBtn>
    </Container>
  );
}
export default CommentWrite;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 40rem;
  margin: auto;
`;

const CommentBox = styled.textarea`
  width: 90%;
  height: 3rem;
  resize: none;
`;

const SubmitBtn = styled.button`
  width: 6rem;
  height: 2rem;
`;
