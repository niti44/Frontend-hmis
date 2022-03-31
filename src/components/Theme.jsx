import { createTheme } from '@material-ui/core/styles'

const Theme = createTheme({
  overrides: {
    MuiTimelineItem: {
      MuiTimelineOppositeContent: {
        '&:before': {
          display: 'none',
        },
      },
    },
  },
})

export default Theme
