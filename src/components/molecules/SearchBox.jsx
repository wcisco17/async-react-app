import React from 'react'




export const SearchBox = () => {
    return (
        <div className="s013">
        <form>
          <fieldset>
            <legend style={{ color: "white" }} >FIND YOUR CLUB</legend>
          </fieldset>
          <div className="inner-form">
            <div className="left">
              <div className="input-wrap first">
                <div className="input-field first">
                  <label>WHAT</label>
                  <input type="text" placeholder="ex: african food, chinese, thai, american food" />
                </div>
              </div>
            </div>
            <button className="btn-search" type="button">SEARCH</button>
          </div>
        </form>
      </div>
    )
}