import React from "react";

export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label><br /><br />
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
          your Web application running on Netlify. The landing page should 
          include the following: Your full name and section Links to each of the
          lab assignments Link to the Kanbas application Liks to all relevant
          source code repositories The Kanbas application should include a link 
          to navigate back to the landing page.
        </textarea>
        <br /><br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
              <br /><br />
            </td>
    
          </tr>
          {/* Complete on your own */}
          <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
                <select>
                    <option value="">ASSIGNMENTS</option>
                    <option value="">QUIZ</option>
                    <option value="">EXAM</option>
                </select>
                <br /><br />
                </td>
            </tr>

            <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
                <select>
                    <option value="">Percentage</option>
                    <option value="">Numbers</option>
                    <option value="">Letters</option>
                </select>
                <br /><br />
                </td>
            </tr>

            <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
                <select>
                    <option value="">Online</option>
                    <option value="">In Person</option>
                </select>
                <br /><br />

                <span>Online Entry Options</span><br/>
                <input type="checkbox" id="type1" name="type1" value="k" />
                <label htmlFor="wd-text-entry">Text Entry</label> <br/>
                <input type="checkbox" id="type2" name="type2" value="k" />
                <label htmlFor="wd-website-url">Website URL</label> <br/>
                <input type="checkbox" id="type3" name="type3" value="k" />
                <label htmlFor="wd-media-recordings">Media Recordings</label> <br/>
                <input type="checkbox" id="type4" name="type4" value="k" />
                <label htmlFor="wd-student-annotation">Student Annotation</label> <br/>
                <input type="checkbox" id="type5" name="type5" value="k" />
                <label htmlFor="wd-file-upload">File Uploads</label> <br/>
                <br /><br />
                </td>
            </tr>

            <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-assign-to">Assign</label>
            </td>
            <table>
                <tr>
                    <label htmlFor="wd-assign-to">Assign to</label><br />
                    <input id="wd-assign-to" value={"Everyone"} />
                    <br/><br/>
                </tr>
            
                <tr>
                    <label htmlFor="wd-due-date">Due</label><br />
                    <input type="date" id="wd-due-date" name="duedate" />
                    <br /><br />
                </tr>
            
                <tr>
                    <td >
                        <label htmlFor="wd-available-from">Available from</label><br />
                        <input type="date" id="wd-availabled-from" name="availabledate" />
                        
                    </td>

                    <td>
                        <label htmlFor="wd-available-until">Until</label><br />
                        <input type="date" id="wd-availabled-until" name="availabledate" />

                    </td>
                </tr>
            </table>
            </tr>
        </table>

        <hr></hr>

        <table align="right">
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-name"></label>
              <button>Cancel</button>
              <button>Save</button>
            </td>
          </tr>
        </table>

      </div>
  );}
  