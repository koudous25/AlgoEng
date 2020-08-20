function [c,b] = Longueur_PLSC(X,Y)
m=length(X);
n=length(Y);
for i=1:m+1
    c(i,1) = 0;
end
for j=1:n+1
    c(1,j) = 0;
end
for i=2:m+1
    for j=2:n+1
        u=i-1;v=j-1;
        if X(u) == Y(v)
            c(i,j) = c(i-1,j-1)+1;
            b(i,j) = '?';
        elseif c(i-1,j) >= c(i,j-1)
            c(i,j) = c(i-1,j);
            b(i,j) = '?';
        else
            c(i,j) = c(i,j-1);
            b(i,j) = '?';
        end
    end
end
end

