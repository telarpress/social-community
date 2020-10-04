import pure from 'recompose/pure';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

// @ts-ignore
const SvgIconCustom = typeof global !== 'undefined' && global.__MUI_SvgIcon__ || SvgIcon;

function createSvgIcon(path:any, displayName:string) {
    let Icon:any = props => (
        <SvgIconCustom {...props}>
        {path}
        </SvgIconCustom>
    );
    Icon.displayName = displayName;
    Icon = pure(Icon);
    Icon.muiName = 'SvgIcon';
    return Icon;
};
export const svgApi = {
    createSvgIcon
}