import React from 'react';

export default function TripForm({
  location,
  setLocation,
  start_date,
  setStart_date,
  end_date,
  setEnd_date,
  handleSubmit,
}) {
  return (
    <div>
      <form>
        <div>
          <label>Destination City</label>
          <input
            placeholder="location"
            type="text"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
        </div>
        <div>
          <label>State</label>
          <input placeholder="text" type="text" />
        </div>
        <div>
          <label>Start Date</label>
          <input
            className="controls"
            type="date"
            placeholder="Starting Date"
            value={start_date}
            onChange={(e) => {
              setStart_date(e.target.value);
            }}
          />
        </div>
        <div>
          <label>End of Trip Date</label>
          <input
            className="controls"
            type="date"
            placeholder="Ending Date"
            value={end_date}
            onChange={(e) => {
              setEnd_date(e.target.value);
            }}
          />
        </div>
        <div>
          <button
            onClick={handleSubmit}
            class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Plan your trip
          </button>
        </div>
      </form>
    </div>
  );
}
