import { SituationPageNavigation } from '@common/components/Navigation';
import { Spacing } from '@common/components/Spacing';
import styled from '@emotion/styled';
import { theme } from '@styles/theme';
import { useState } from 'react';
import { Category } from '@features/Situation/components';

const SituationPage = () => {
  const [selectedEmotion, setEmotion] = useState('');

  const emotion1 = [
    { value: 'happiness', label: '행복' },
    { value: 'excite', label: '신남' },
    { value: 'flutter', label: '설렘' },
    { value: 'peaceful', label: '평온' },
  ];
  const emotion2 = [
    { value: 'empty', label: '공허' },
    { value: 'depress', label: '우울' },
    { value: 'sadness', label: '슬픔' },
    { value: 'angry', label: '분노' },
  ];
  console.log(selectedEmotion);
  return (
    <>
      <SituationPageNavigation />
      <Spacing size={1.6} />
      <StyledTitle>Feeling</StyledTitle>
      <Spacing size={3} />
      <Category category={selectedEmotion} setCategory={setEmotion} categoryList={emotion1} />
      <Spacing size={8} />
      <Category category={selectedEmotion} setCategory={setEmotion} categoryList={emotion2} />
      <Spacing size={3.6} />
    </>
  );
};

export default SituationPage;

export const StyledTitle = styled.div`
  ${theme.font.semibold18};
  color: ${theme.color.gray07};
  width: 100%;
`;

export const StyledLine = styled.div`
  width: 34.2rem;
  height: 0.1rem;
  flex-shrink: 0;
  background: ${theme.color.gray12};
`;

export const StyledEmoji = styled.div<{ isSelected: boolean }>`
  display: flex;
  width: 5.8rem;
  height: 5.8rem;
  justify-content: center;
  align-items: center;
  border-radius: 50rem;
  background: ${(props) => (props.isSelected ? theme.color.white : theme.color.gray12)};
  aspect-ratio: 1/1;
`;
