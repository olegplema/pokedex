import React, {FC} from 'react';
import Row from "./Row";
import Col from "./Col";
import styles from './Table.module.css'
import {convertName} from "../../utils/convertName";


interface TableLineProps {
    firstCol: string
    secondCol: string|number
}

const TableLine : FC<TableLineProps> = ({firstCol, secondCol}) => {
    return (
        <Row>
            <Col className={styles.first_col}>{convertName(firstCol)}</Col>
            <Col className={styles.second_col}>{secondCol}</Col>
        </Row>
    );
};

export default TableLine;