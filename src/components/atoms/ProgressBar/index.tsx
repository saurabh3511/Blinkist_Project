import styled from '@emotion/styled';

export interface ProgressBarProps {
  progress?: number;
}

function ProgressBar({ progress }: ProgressBarProps) {
  const StyledDiv = styled('div')({
    width: '100%',
    height: '10px',
    backgroundColor: '#f1f6f4',
    padding: 0,
    marginTop: 0,
    border: '1px',
    boxSizing: 'border-box',
    borderRadius: '8px',
  });
  const progressed =
    progress !== undefined && progress !== null ? `${progress}%` : '100%';

  const InnerDiv = styled('div')({
    width: progressed,
    height: '10px',
    marginTop: 0,
    padding: 0,
    backgroundColor: '#E1ECFC',
  });

  return (
    <StyledDiv data-testid="progressBar">
      <InnerDiv  data-testid="progressBar"/>
    </StyledDiv>
  );
}
export default   ProgressBar;