import React from 'react';
import {VerticalTimeline,VerticalTimelineElement} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css"
import {School as SchoolIcon} from '@material-ui/icons';
import {Work as WorkIcon} from '@material-ui/icons';

const About = () => {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
      <VerticalTimelineElement className='vertical-timeline-element--education' date='2012' iconStyle={{background:"#3e497a",color:'#fff'}} icon={<SchoolIcon/>}>
          <h3 className='vertical-timeline-element-title'>K.V.S.C , Pune Maharashtra</h3>
          <h4 className='vertical-timeline-element-subtitle'>CBSE 74.1%</h4>
          <p>Science</p>
      </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--education' date='2012-2014' iconStyle={{background:"#3e497a",color:'#fff'}} icon={<SchoolIcon/>}>
          <h3 className='vertical-timeline-element-title'>Rosary Junior College , Pune Maharashtra</h3>
          <h4 className='vertical-timeline-element-subtitle'>HSC 66.92%</h4>
          <p>Science with Information Technology</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--education' date='2014-2019' iconStyle={{background:"#3e497a",color:'#fff'}} icon={<SchoolIcon/>}>
          <h3 className='vertical-timeline-element-title'>Sinhgad Institute of Technology , Lonavala Maharashtra</h3>
          <h4 className='vertical-timeline-element-subtitle'>Bachelor of Engineering 60.56%</h4>
          <p>Computer Science</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--education' date='2019-2020' iconStyle={{background:"#e9d35b",color:'#fff'}} icon={<WorkIcon/>}>
          <h3 className='vertical-timeline-element-title'>Profound Technologies , Pune</h3>
          <h4 className='vertical-timeline-element-subtitle'>Diploma in Advance Java Technologies</h4>
          <p>Diploma </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--education' date='Nov 2020-Nov 2022' iconStyle={{background:"#e9d35b",color:'#fff'}} icon={<WorkIcon/>}>
          <h3 className='vertical-timeline-element-title'>IIIT-B , Bangalore</h3>
          <h4 className='vertical-timeline-element-subtitle'>PGD in FullStack Development</h4>
          <p>FullStack(Upgrad) </p>
        </VerticalTimelineElement>


      </VerticalTimeline>
    </div>
  )
}

export default About