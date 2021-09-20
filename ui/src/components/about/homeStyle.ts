import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
const drawerWidth = 220
export const aboutStyle = (theme: any) => ({
    root: {
        zIndex: 1,
        overflow: 'visible',

    },
    main:{
        zIndex: 1,
        width: '100%',
        height: '100%',
        marginTop: theme.spacing(3),
    },
    rootPeople:{
        width: '100%',
        height: '100%',
        marginTop:'-17px',
        zIndex: 1,
        overflow: 'hidden',
        maxWidth: 345,
    },
    media: {
        display:'flex',
        justifyContent: 'center',
        paddingTop: "0"
    },
    appFrame: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '100%',
        // overflowY: 'auto'
    },
    navIconHide: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        color:'green',
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
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
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
        marginRight:74
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    palette: {
        backgroundColor:'red !important'
    },

    drawerHeader: {
      //  backgroundColor: theme.palette.secondary.main,
        padding: 10,
        textAlign: 'center',
        marginLeft:'97px',
    },
    drawerPaper: {
        maxWidth: drawerWidth,
        marginTop: '70px',
        width: drawerWidth,
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            position: 'relative',
            height: '100%',
        },
    },
    drawerPaperLarge: {
        width: drawerWidth,
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            height: '100%',
        },
        top: 70,
        backgroundColor: '#fafafa',
        borderRight: 0
    },
    menu: {
        height: '100%',
    },
    content: {

        backgroundColor: 'transparent',
        width: '100%',
        flexGrow: 1,

        padding: theme.spacing(3),
        paddingTop: 15,

        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        height: 'calc(100% - 56px)',
        marginTop: 90,
        marginLeft:0,
        [theme.breakpoints.up('sm')]: {
            height: 'calc(100% - 64px)',
            marginTop: 17,
            paddingTop: 15,
            marginLeft:0,

        },
        [theme.breakpoints.down('sm')]: {
            height: 'calc(100% - 64px)',
            marginTop: 44,
            paddingTop: 15,
            marginLeft:0,
            padding:0,
        },
        [theme.breakpoints.down('xs')]: {
            height: 'calc(100% - 64px)',
            marginTop: 44,
            paddingTop: 15,
            marginLeft:0,
            padding:0,
        },
    },
    'MuiAppBar-colorPrimary' : {
        backgroundColor: '#b50d1a !important',
    },
    'content-left': {
        marginLeft: 0,
    },
    'content-right': {
        marginRight: 0,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    'contentShift-left': {
        marginLeft: 0,
        [theme.breakpoints.up('md')]: {
            marginLeft: drawerWidth
        }
    },
    'contentShift-right': {
        marginRight: 0,
        [theme.breakpoints.up('md')]: {
            marginRight: drawerWidth
        }
    },
    logo: {
        fill: 'currentColor',
        width: '100%',
        height: '2em',
        display: 'inline-block',
        fontSize: '17px',
        transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        userSelect: 'none',
        flexShrink: 0
    },
    header : {
        background:'#5b5958',
        position: 'absolute',
        right: '0',
        top: '0',
    },

    homeTitle:{
        'color': '#fff',
        'margin-top': '5px',
        'left': '-9%',
        'border-left-color': '#fff',
        'border-left': '1px solid #fff',
        'padding-left': '24px',
    },
    'MuiPaper-root':{
        'borderRight':'0px !important'
    },
    'MuiDivider-root':{
        'backgroundColor':'#fff !important'
    },
    card: {
        marginTop:"30px",

        margin: "auto",
        transition: "0.3s",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        }
    },

    context: {
        textAlign: "center",
        marginTop:"20px",
        padding: theme.spacing.unit * 3
    },
    divider: {
        margin: `${theme.spacing.unit * 3}px 0`
    },
    heading: {
        fontWeight: "bold"
    },
    subheading: {
        lineHeight: 1.8
    },
    avatar: {
        display: "inline-block",
        border: "2px solid white",
        "&:not(:first-of-type)": {
            marginLeft: -theme.spacing.unit
        }
    },
    'MuiTypography-h6':{
        textAlign:"center"
    },
    'MuiTypography-caption':{
       marginLeft:"50px"
    },
    'MuiTypography-gutterBottom':{
        marginBottom:'1.35em',
        textAlign:"center"
    },
    Followers:{

        paddingRight:"10px",
        width: '100px',
        display: 'inline flow-root list-item',
        listStyle: 'none',
        marginTop:'13px'
    },
    Following:{
        width: '100px',
        display: 'inline flow-root list-item',
        listStyle: 'none',
        borderLeft:"1px solid #000",
        marginTop:'13px'
    },
    userImage:{
        width:"80px",
        height:"80px"
    },
    linkProfile:{
        color:'#000',
        textDecoration:'none',
       },
    // divider:{
    //     marginTop:'19px',
    //     marginBottom:'21px'
    // },
    peopleHeader:{
        marginTop:'16px',
        marginLeft:'10px'
    },
    peopleUserName:{
        marginTop: '20px'
    },
    typographyHeading:{
        marginTop:'-30px'
    }

})