import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { OverviewWrapper, Title ,Description } from './styles';

export default function Overviewcomponent({icon , title , description}) {
  return (
    <OverviewWrapper>
        <div>
            <FontAwesomeIcon color='#f2545f' size='2xl' icon={icon}/>
        </div>
        <Title>{title} </Title>
        <Description>{description} </Description>
    </OverviewWrapper>
  );
}
