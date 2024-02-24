import "./status.css"

function Status() {
    return (<div className="overflow-y-scroll position-fixed bottom-0 end-0 course-status" 
    style={{ left: "80%", top: "60px" }} >
    <div className="set-1">
        <h5>Course Status</h5>
        <div className="button-set">
            <div><button className="split-button"><i className="fa fa-stop-circle"></i>Unpublish</button><button
                    className="split-button" id="published"><i
                        className="fa fa-check-circle text-success"></i>Published</button>
            </div>
        </div>
    </div>
    <div className="set-2 button-set">
        <div><button className="grid-button"><i className="fa fa-file"></i>Import Existing Content</button></div>
        <div><button className="grid-button"><i className="fa fa-cloud"></i>Import from Commons</button></div>
        <div><button className="grid-button"><i className="fa fa-home"></i>Choose Home Page</button></div>
        <div><button className="grid-button"><i className="fa fa-bar-chart-o"></i>View Course Stream</button></div>
        <div><button className="grid-button"><i className="fa fa-microphone"></i>New Announcement</button></div>
        <div><button className="grid-button"><i className="fa fa-bar-chart-o"></i>New Analytics</button></div>
        <div><button className="grid-button"><i className="fa fa-bell"></i>View Course Notifications</button></div>
    </div>
    <div className="to-do">
        <h5>To Do</h5>
        <hr />
        <span className="assignments"><i className="fa fa-exclamation"></i>Grade A1 - ENV + HTML</span>
    </div>
    <div className="coming-up">
        <div>Coming Up<i className="fa fa-bookmark"></i><span className="calendar">View Calendar</span></div>
        <hr />
        <div className="lecture-set">
            <div><i className="fa fa-bookmark"></i><span className="calendar">Lecture 1</span></div>
            <div><i className="fa fa-bookmark"></i><span className="calendar">Lecture 2</span></div>
            <div><i className="fa fa-bookmark"></i><span className="calendar">Lecture 3</span></div>
        </div>
    </div>
</div>)
}

export default Status;