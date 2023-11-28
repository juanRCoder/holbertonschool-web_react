import React from "react";
import PropTypes from "prop-types";

function CourseListRow({
  isHeader = false,
  textFirstCell,
  textSecondCell = null,
}) {
  if (isHeader) {
    if (textSecondCell != null) {
      return (
        <tr>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </tr>
      );
    } else {
      return (
        <tr>
          <th colSpan={2}>{textFirstCell}</th>
        </tr>
      );
    }
  } else {
    return (
      <tr>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </tr>
    );
  }
}

//Tipos de datos esperados para los props
CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  textFirstCell: PropTypes.string.isRequired,
};

export default CourseListRow;
