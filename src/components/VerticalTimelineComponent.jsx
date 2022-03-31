import * as React from 'react'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import styled from 'styled-components'
import PastVisitTimeline from './TimeLine/PastVisitTimeline'

const TimelineItemContainer = styled(TimelineItem)`
  border-radius: 10px;
  &::before {
    display: none;
  }
`

export default function VerticalTimelineComponent() {
  return (
    <Timeline >
      <TimelineItemContainer>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: '#0f0f0f' }} />
          <TimelineDot color='success' sx={{ py: 1, px: 1 }} />
          <TimelineConnector sx={{ bgcolor: '#0f0f0f' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <PastVisitTimeline />
        </TimelineContent>
      </TimelineItemContainer>
      <TimelineItemContainer>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: '#0f0f0f' }} />
          <TimelineDot color='success' sx={{ py: 1, px: 1 }} />
          <TimelineConnector sx={{ bgcolor: '#0f0f0f' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <PastVisitTimeline />
        </TimelineContent>
      </TimelineItemContainer>
      <TimelineItemContainer>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: '#0f0f0f' }} />
          <TimelineDot color='success' sx={{ py: 1, px: 1 }} />
          <TimelineConnector sx={{ bgcolor: '#0f0f0f' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <PastVisitTimeline />
        </TimelineContent>
      </TimelineItemContainer>
    </Timeline>
  )
}
