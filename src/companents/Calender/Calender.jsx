"use client"

import React, { useState } from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

function Calender() {
  const [selectedDate, setSelectedDate] = useState(dayjs('2022-04-17'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log(date); // This will log the selected date every time it changes
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className=''>
          <DemoContainer
            components={[
              'StaticDatePicker',
            ]}>
            <StaticDatePicker
              value={selectedDate}
              onChange={handleDateChange}
              defaultValue={dayjs('2022-04-17')}
            />
          </DemoContainer>
      </div>
    </LocalizationProvider>
  );
}

export default Calender
