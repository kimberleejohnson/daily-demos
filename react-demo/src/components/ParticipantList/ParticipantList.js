import React, { useContext, useEffect } from "react";
import "./ParticipantList.css";
// Hold for importing participant names and hand icons
import CallObjectContext from "../../CallObjectContext";
import { logDailyEvent } from "../../logUtils";

// Placeholder function for telling if a participant has raised their hand

/**
 * Props:
 * - () => ()
 * - boolean
 */

export default function ParticipantList(props) {
  const callObject = useContext(CallObjectContext);
  // Will need to have constants here for state of hand raised
  // Constants for whether someone has joined a call

  /**
   * Start listening for participant changes when callObject is set (i.e. when the video starts, component mounts).
   * This event will capture any changes to your audio/video mute state.
   */
  useEffect(() => {
      if (!callObject) return; 

      // Functions here for listening to state, adding participant names 
  }, [callObject]); 

  return (
      <div className="participant-list">
          <h1>Test list</h1>
      </div>
  )
}
