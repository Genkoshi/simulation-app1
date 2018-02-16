update bins
    set bin_name = $2, bin_price = round($3, 2)
    where bin_id = $1;