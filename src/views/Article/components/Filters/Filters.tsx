import React, { useCallback } from 'react';
import {
  createStyles,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel
} from '@material-ui/core';
import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { Box, Button } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { filterEffects } from 'store/effects/ProductEffets';
import { useDispatch } from 'react-redux';
import styles from './Filter.module.scss';

interface dataStructure {
  id: number;
  name: string;
  checked: boolean;
}
const data: dataStructure[] = [
  {
    id: 0,
    name: 'Canon',
    checked: false
  },
  {
    id: 1,
    name: 'Olympus',
    checked: false
  },
  {
    id: 2,
    checked: false,
    name: 'Fujifilm'
  },
  {
    id: 3,
    checked: false,
    name: 'Pentax'
  },
  {
    id: 4,
    checked: false,
    name: 'Nikon'
  },
  {
    id: 5,
    checked: false,
    name: 'Sigma'
  },
  {
    id: 6,
    checked: false,
    name: 'Panasonic'
  },

  {
    id: 7,
    checked: false,
    name: 'Geleral Electrics'
  },
  {
    id: 8,
    checked: false,
    name: 'Leica'
  },
  {
    id: 9,
    checked: false,
    name: 'Zenit'
  }
];

export default function Filters(props: any) {
  const { loadData } = props;
  const [dataFilter, setDataFilTer] = React.useState(data);
  const [dataToSend, setDataToSend] = React.useState<any[]>([]);

  const dispatch = useDispatch();
  const handleSendData = () => {
    dispatch(filterEffects(dataToSend));
  };

  const handleItemToFilter = (Item: dataStructure) => {
    if (Item.checked === false) {
      setDataFilTer(
        dataFilter.map((item) =>
          item.id === Item.id ? { ...item, checked: true } : item
        )
      );
      setDataToSend([...dataToSend, Item.name]);
    } else {
      setDataFilTer(
        dataFilter.map((item) =>
          item.id === Item.id ? { ...item, checked: false } : item
        )
      );
      setDataToSend(dataToSend.filter((value: any) => value !== Item.name));
    }
  };

  const handleReloadData = () => {
    loadData();
    setDataFilTer(data);
  };

  return (
    <Card className={styles.filter}>
      <CardContent className={styles.filter_content}>
        <Box>
          <Button
            className={styles.filter_button}
            fullWidth
            color={'primary'}
            variant={'contained'}
            onClick={() => handleSendData()}>
            Показать результат
          </Button>
        </Box>
        <Box mt={10 / 8}>
          <Button
            className={styles.filter_second_button}
            fullWidth
            color={'secondary'}
            variant={'contained'}
            onClick={() => handleReloadData()}>
            Очистить фильтр
          </Button>
        </Box>
        <Box mt={26 / 8}>
          <Box fontSize={17} maxHeight={42} className={styles.filter_text}>
            Производитель
          </Box>
          <Box>
            <Grid container>
              {dataFilter.map((item: any) => (
                <Grid item sm={6} md={6} xs={6} spacing={0}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={item.checked}
                        onChange={(e: any) => handleItemToFilter(item)}
                        color="primary"
                      />
                    }
                    label={
                      <Box className={styles.filter_value}>{item.name}</Box>
                    }
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
