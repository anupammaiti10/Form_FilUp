FROM node

RUN mkdir -p form_filup

COPY . /form_filup 

# If there are dependencies to install

CMD ["node", "/form_filup/script.js"]