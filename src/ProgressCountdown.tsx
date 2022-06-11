import React from 'react';
import styled from 'styled-components';
import Countdown, { CountdownRenderProps } from 'react-countdown';

interface ProgressCountdownProps {
  base: Date;
  deadline: Date;
  hideBar?: boolean;
  description: string;
}

const ProgressCountdown: React.FC<ProgressCountdownProps> = ({ base, deadline, hideBar, description }) => {
  const percentage =
    Date.now() >= deadline.getTime()
      ? 100
      : ((Date.now() - base.getTime()) / (deadline.getTime() - base.getTime())) * 100;

  const countdownRenderer = (countdownProps: CountdownRenderProps) => {
    const { days, hours, minutes, seconds } = countdownProps;
    const d = String(days);
    const h = String (hours);
    const m = String(minutes);
    const s = String(seconds);
    var genesisEnd =  new Date(deadline.getTime());
    genesisEnd.setHours(deadline.getHours() + 24);
    const hEnd = String((Math.abs(genesisEnd.getTime() - Date.now()) / 36e5).toFixed(0));
    const mEnd = String(((Math.abs(genesisEnd.getTime() - Date.now())/60000)%60).toFixed(0));
    const sEnd = String(((Math.abs(genesisEnd.getTime() - Date.now())/1000)%60).toFixed(0));    
    return (
      <StyledCountdown>
        <div>
          <h1 className="countdown_day">{d.padStart(2, '0')}</h1>
          <h4 className="countdown_day_desc">days</h4>
        </div>
        
        {(days==0 && hours ==0 &&minutes==0 && seconds==0)?
          ((Math.abs(Date.now() - deadline.getTime()) <=8.64e+7) ?`GENESIS LIVE NOW, Ending in ${hEnd.padStart(2, '0')}:${mEnd.padStart(2, '0')}:${sEnd.padStart(2, '0')}`:''):
          `${h.padStart(2, '0')}:${m.padStart(2, '0')}:${s.padStart(2, '0')}`
        }        
          
      </StyledCountdown>
    );
  };
  return (
    // <Card>
    <StyledCardContentInner>
      {/* <StyledDesc>{description}</StyledDesc> */}
      <Countdown key={new Date().getTime()} date={deadline} renderer={countdownRenderer} /> 
      {hideBar ? (
        ''
      ) : (
        <StyledProgressOuter>
          <StyledProgress progress={percentage} />
        </StyledProgressOuter>
      )}
    </StyledCardContentInner>
    // </Card>
  );
};

const StyledCountdown = styled.p`
   font-size: 46px;
  font-weight: 700;
  margin: -32px 0 46px 0;
  color: #d4af37;
  float:left;
`;

const StyledProgressOuter = styled.div`
  width: 100%;
  height: 8px;
  border-radius: 3px;
  background: ${(props) => props.theme.color.grey[700]};
`;

const StyledProgress = styled.div<{ progress: number }>`
  width: ${(props) => props.progress}%;
  height: 100%;
  border-radius: 3px;
  background: ${(props) => props.theme.color.grey[100]};
`;

const StyledCardContentInner = styled.div`
  height: 100%;
  display: flex;
  align-items: left;
  justify-content: left;
  flex-direction: column;
  
`;

export default ProgressCountdown;
