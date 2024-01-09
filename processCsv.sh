#!/bin/bash
set -e
cp $1 src/assets/ssd.csv
ssd=src/assets/ssd.csv
# usage: ./processNames.sh inputfile
sed -i 's/固加德/GUDGA/gI' $ssd
sed -i 's/kioxia/KIOXIA/gI' $ssd
sed -i 's/intel/INTEL/gI' $ssd
sed -i 's/繁想/FANXIANG/gI' $ssd
sed -i 's/fanxiang/FANXIANG/gI' $ssd
sed -i "s/SK/SK Hynix/gI" $ssd
sed -i "s/,P41 P/,Solidigm P41 P/gI" $ssd
sed -i "s/,PM/,Samsung PM/gI" $ssd
sed -i "s/PC801/SK Hynix PC801/gI" $ssd
sed -i "s/memblaze/MemBlaze/gI" $ssd
sed -i "s/容量过低没办法测/NaN/g" $ssd
sed -i 's/"发生错误,跑不了"/NaN/g' $ssd
sed -i "s/Intel DC SSD在这个项目性能异常不加入测试/NaN/gI" $ssd
sed -i "s/INTEL DC SSD在这个项目性能异常 不加入测试/NaN/gI" $ssd
sed -i "s/大容量DC不重复测试/NaN/g" $ssd
sed -i "s/大容量DC不重复测试/NaN/g" $ssd
sed -i "s/测试错误,跑不完/NaN/g" $ssd
sed -i "s/没测/NaN/g" $ssd
sed -i "s/'NaN'/NaN/g" $ssd
sed -i 's/"NaN"/NaN/g' $ssd
