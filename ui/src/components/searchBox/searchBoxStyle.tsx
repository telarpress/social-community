import {fade} from "@material-ui/core/styles";

export const SearchBoxStyle = (theme: any) => ({
    search: {
        position: 'relative',
        padding: '3px',
        width: '704px !important',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        [theme.breakpoints.up('sm')]: {
            marginLeft: '0px',
            width: 'auto',
        },
        [theme.breakpoints.down('sm')]: {
            display:'none !important'
        },
        [theme.breakpoints.down('xs')]: {
            display:'none !important'
        },
    },
    searchMobile:{
        position: 'relative',
        padding: '3px',
        marginRight: theme.spacing(2),
        marginLeft: 0,
        [theme.breakpoints.up('sm')]: {
            marginLeft: '0px',
            width: 'auto',
            display:'none !important'
        },
        [theme.breakpoints.down('sm')]: {
            display:'block !important'
        },
        [theme.breakpoints.down('xs')]: {
            display:'block !important'
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '47'
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },

})