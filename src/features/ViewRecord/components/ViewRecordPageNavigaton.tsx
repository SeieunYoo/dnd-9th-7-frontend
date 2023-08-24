import { Navigation } from '@common/components/Navigation';
import { SvgIcon } from '@common/components/SvgIcon';

export const ViewRecordPageNavigation = () => {
  return (
    <Navigation>
      <Navigation.Left>
        <SvgIcon id='leftArrow' size={24} />
      </Navigation.Left>
      <Navigation.Center />
      <Navigation.Right>
        <SvgIcon id='edit_horizontal_white' size={24} />
      </Navigation.Right>
    </Navigation>
  );
};
